import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Product } from '@app/_models/product/product';
import { ProductService } from './product.service';
import { CartProduct } from '@app/_models/newProduct/CartProduct';
import { AccountService } from './account.service';
import { Cart } from '@app/_models/order/Cart';
import { ResponseDto } from '@app/_models/ResponseDto';
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })
export class CartService {
    private cartSubject: BehaviorSubject<Cart>;
    public cart: Observable<Cart>;
    cartSampleSubject: BehaviorSubject<Cart>;

    user:User = null
    constructor(
        private router: Router,
        private http: HttpClient,
        private productService: ProductService,
        private accountService:AccountService,
        private alertService:AlertService
    ){
        
        this.cartSampleSubject = new BehaviorSubject<Cart>(JSON.parse(localStorage.getItem('cartSample')));
        this.cartSubject = new BehaviorSubject<Cart>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
        if(accountService.userValue!=null && accountService.userValue!=undefined){
            this.user = accountService.userValue
        }
    }
    public get getCart(): Cart {
        let cart = this.cartSubject.value
         if(cart==null && cart==undefined){
            
           return new Cart()
            
        }else{
            return this.cartSubject.value;
        }
        
    }

    public get cartValue(): Cart {


        if(this.cartSubject.value == undefined && this.cartSubject.value == null){
            return null
        }else{
            return this.cartSubject.value
        }
        
    }
    public get cartValueProduct(): CartProduct[] {
        let cartProduct:CartProduct[] = []
        if(this.cartSubject.value == undefined && this.cartSubject.value == null){
            return cartProduct
        }else{
            return this.cartSubject.value.products
        }
        
    }
    public get cartSampleValue(): CartProduct[] {
        return this.cartSampleSubject.value.products;
    }
    saveCart(userId:string,cartProducts:CartProduct[] ):Cart{
        let cart:Cart = null;
        this.http.post<ResponseDto>(`${environment.orderUrl}cart/${userId}`,cartProducts)
        .pipe(first())
        .subscribe(
            response =>{
              if(response.status=="SUCCESS"){
                  cart=response.data
              }}
            ,error =>{
      
                this.alertService.error(error.data.errorMessage)
                console.log(error)
              }
          );
          return cart;
    }
    // public addProductToCart(product:Number):Number[]{

    //     console.log(this.cartSampleValue)
    //     if(this.cartSampleValue==null){
    //         let cartIntial:Number[]=[product]
    //         localStorage.setItem('cartSample', JSON.stringify(cartIntial));
    //         return this.cartSampleValue;
    //     }else{
    //         this.cartSampleValue.push(product)
    //         console.log(this.cartSampleValue)
    //         localStorage.setItem('cartSample', JSON.stringify(this.cartSampleValue));
    //         return this.cartSampleValue;
    //     }
         
    // }
    public addProductToCart(title:string,varientId:string,quantity:Number){

        
        let cartsProducts:CartProduct[]
        let cartProduct:CartProduct
        this.productService.getCartProduct(title,varientId,quantity).subscribe(
            response =>{
                console.log(response)
              if(response.status=="SUCCESS"){
                  console.log("success")
                  cartProduct=response.data
                  if(cartProduct!=null){
                    cartsProducts = this.checkCartProduct(cartProduct)
                }
                let totalAmount:number = 0
                cartsProducts.forEach(element => {
                    totalAmount = (element.price * element.quantity) +totalAmount
                });
                
                if(this.user!=null && this.user!=undefined ){
                    console.log("user exist")
                    let cart = this.saveCart(this.user.id,cartsProducts)
                    this.saveCartsToLocal(cart)
                }else{
                    console.log("user not exist")
                    let cart = this.getCart
                    console.log(cart)
                    console.log("object")
                    cart.products = cartsProducts
                    cart.totalAmount = totalAmount
                    console.log(cart)
                    this.saveCartsToLocal(cart)
                }
        
              }}
            ,error =>{
      
                this.alertService.error(error.data.errorMessage)
                console.log(error)
                
              } 
          );
        console.log(cartProduct)
        
    }
    public checkCartProduct(cartProduct:CartProduct):CartProduct[]{
            let carts:CartProduct[] =this.cartValueProduct
            let added:Boolean = false
            for(let i = 0;i<carts.length;i++){
                if(carts[i].id === cartProduct.id){
                    cartProduct.quantity=carts[i].quantity+cartProduct.quantity
                    carts = this.removeProduct(carts[i])
                    carts.splice(i,0,cartProduct)
                    added=true
                }
            }
            if(!added){
                carts.push(cartProduct)
            }
            return carts
        
    }
    deleteProductCart(removeProduct:any){
        let cart:Cart = this.getCart
        cart.products = this.removeProductFromList(cart.products,removeProduct)
        this.saveCartLogic(cart)

    }
    saveCartLogic(cart:Cart){
        if(this.user!=null && this.user!=undefined ){
            let newCart = this.saveCart(this.user.id,cart.products)
            this.saveCartsToLocal(newCart)
        }else{
            let totalAmount
            cart.products.forEach(element => {
                totalAmount = (element.price * element.quantity) + totalAmount
            });
            cart.totalAmount = totalAmount
            this.saveCartsToLocal(cart)
        }

    }
    removeProduct(removeProduct:any):CartProduct[]{
        let cartProduct = this.removeProductFromList(this.cartSampleValue,removeProduct)
        return cartProduct
    }
    removeProductFromList(carts:CartProduct[],removeProduct:any):CartProduct[]{
        var idx = carts.indexOf(removeProduct);
    if (idx != -1) {
     
        carts.splice(idx, 1); // The second parameter is the number of elements to remove.
      }
      return carts
    }
    saveCartsToLocal(carts:Cart){
        console.log(JSON.stringify(carts))
        localStorage.setItem('cart', JSON.stringify(carts));
        console.log("check"+JSON.parse(localStorage.getItem('cart')))
    }
}