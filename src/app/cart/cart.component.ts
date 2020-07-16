import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service';
import { Cart } from '@app/_models/order/Cart';
import { AccountService } from '@app/_services/account.service';
import { User } from '@app/_models';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loggedIn: Boolean = false
  carts: Cart
  cartAvailable: Boolean = false
  user: User
  constructor(private router: Router, private cartService: CartService, private accountService: AccountService) {

    this.userLoggedInfo()
    this.getCartDetails()

  }

  ngOnInit(): void {
    this.userLoggedInfo()
    this.getCartDetails()
  }
  userLoggedInfo() {
    this.user = this.accountService.userValue
    if (this.user == null && this.user == undefined) {
      this.loggedIn = false;

    }
    else {
      this.loggedIn = true;
    }
  }
  getCartDetails() {

    this.carts = this.cartService.cartValue;
    if (this.carts != null && this.carts != undefined) {
      if (this.carts.products != null && this.carts.products != undefined && this.carts.products.length > 0) {
        this.cartAvailable = true
      }
    }
  }

}
