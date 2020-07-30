import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service';
import { Cart } from '@app/_models/order/Cart';
import { AccountService } from '@app/_services/account.service';
import { User } from '@app/_models';
import { CartProduct } from '@app/_models/newProduct/CartProduct';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct: CartProduct[]
  loggedIn: Boolean = false
  carts: Cart
  cartAvailable: Boolean = false
  user: User
  constructor(private router: Router, private cartService: CartService, private accountService: AccountService) {

    this.userLoggedInfo()
    this.getCartDetails()

  }
  calculateTotal(amount: number, quantity: number): number {
    return amount * quantity
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
        //for fake output cartAvailable is changed added else should be removed later
        this.cartAvailable = true
      }
    }
    else {
      //for fake output cartAvailable is changed to false
      this.cartAvailable = true
      this.cartProduct = [{
        "id": "5f0c42d8f0f3f0768b7a2417",
        "productTitle": "Hulk T-Shirt",
        "title": "S",
        "requiresShipping": true,
        "taxable": true,
        "available": false,
        "name": "Hulk T-Shirt - S",
        "price": 599.0,
        "weight": 240.0,
        "featuredImage": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg",
        "quantity": 1,
        "inventoryManagement": "AskTech",
        "barcode": null
      }, {
        "id": "5f0c42d8f0f3f0768b7a2417",
        "productTitle": "Hulk T-Shirt",
        "title": "M",
        "requiresShipping": true,
        "taxable": true,
        "available": false,
        "name": "Hulk T-Shirt - M",
        "price": 599.0,
        "weight": 240.0,
        "featuredImage": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg",
        "quantity": 1,
        "inventoryManagement": "AskTech",
        "barcode": null
      }, {
        "id": "5f0c42d8f0f3f0768b7a2417",
        "productTitle": "Hulk T-Shirt",
        "title": "L",
        "requiresShipping": true,
        "taxable": true,
        "available": false,
        "name": "Hulk T-Shirt - L",
        "price": 599.0,
        "weight": 240.0,
        "featuredImage": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg",
        "quantity": 1,
        "inventoryManagement": "AskTech",
        "barcode": null
      }]

    }

  }

}
