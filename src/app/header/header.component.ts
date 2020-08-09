import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service';
import { AccountService } from '@app/_services/account.service';

import { Product } from '@app/_models/product/product';
import { CartProduct } from '@app/_models/newProduct/CartProduct';
import { Cart } from '@app/_models/order/Cart';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mycart: String = "cart-parent ";
  mysearch: String = "search-parent ";
  numone: Number = 0;
  numtwo: Number = 0;
  cartSize: number = 0;
  cartProducts: Product[];
  carts: Cart
  user: User;
  private userSubject: BehaviorSubject<User>
  loggedin: any;
  notlogged: boolean = false;
  constructor(private router: Router, private cartService: CartService, private accountService: AccountService) {

  }




  ngOnInit() {
    this.userLoggedInfo()
    this.getCartDetails()
  }
  ngDoCheck() {
    this.userLoggedInfo()
    this.getCartDetails()
  }

  getCartDetails() {

    this.carts = this.cartService.cartValue;
    if (this.carts != null && this.carts != undefined) {
      this.cartSize = this.carts.products.length
    } else {
      this.carts = new Cart()
      this.carts.products = []
      this.carts.totalAmount = 0
    }
  }
  removeFromCart(product: any) {
    this.cartService.deleteProductCart(product)
  }



  userLoggedInfo() {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    if (this.userSubject.value != null) {
      this.notlogged = false;
      this.user = this.userSubject.value;
    }
    else {
      this.notlogged = true;
    }
  }

  logout() {
    this.accountService.logout()
  }

  mycartfun() {
    this.getCartDetails();
    if (this.numone === 0) {
      this.mycart += 'active';
      this.numone = 1;
    } else if (this.numone === 1) {
      this.mycart = "cart-parent ";
      this.numone = 0;
    }
  }
  mysearchfun() {
    if (this.numtwo === 0) {
      this.mysearch += 'active';
      this.numtwo = 1;
    } else if (this.numtwo === 1) {
      this.mysearch = "search-parent ";
      this.numtwo = 0;
    }
  }





}







