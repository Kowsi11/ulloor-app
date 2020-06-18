import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Product } from '@app/_models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
    private cartSubject: BehaviorSubject<Product[]>;
    public cart: Observable<Product[]>;

    constructor(
        private router: Router,
        private http: HttpClient
    ){
        this.cartSubject = new BehaviorSubject<Product[]>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
    }

    public get cartValue(): Product[] {
        return this.cartSubject.value;
    }
}