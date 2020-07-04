import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Product } from '@app/_models/product/product';

@Injectable({ providedIn: 'root' })
export class CartService {
    private cartSubject: BehaviorSubject<Product[]>;
    public cart: Observable<Product[]>;
    cartSampleSubject: BehaviorSubject<Number[]>;

    constructor(
        private router: Router,
        private http: HttpClient
    ){
        
        this.cartSampleSubject = new BehaviorSubject<Number[]>(JSON.parse(localStorage.getItem('cartSample')));
        this.cartSubject = new BehaviorSubject<Product[]>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
    }

    public get cartValue(): Product[] {
        return this.cartSubject.value;
    }
    public get cartSampleValue(): Number[] {
        return this.cartSampleSubject.value;
    }

    public addProductToCart(product:Number):Number[]{

        console.log(this.cartSampleValue)
        if(this.cartSampleValue==null){
            let cartIntial:Number[]=[product]
            localStorage.setItem('cartSample', JSON.stringify(cartIntial));
            return this.cartSampleValue;
        }else{
            this.cartSampleValue.push(product)
            console.log(this.cartSampleValue)
            localStorage.setItem('cartSample', JSON.stringify(this.cartSampleValue));
            return this.cartSampleValue;
        }
         
    }
    removeProduct(removeProduct:any):Number[]{
        var idx = this.cartSampleValue.indexOf(removeProduct);
    if (idx != -1) {
     
        this.cartSampleValue.splice(idx, 1); // The second parameter is the number of elements to remove.
      }
      localStorage.setItem('cartSample', JSON.stringify(this.cartSampleValue));

      return this.cartSampleValue
    }
}