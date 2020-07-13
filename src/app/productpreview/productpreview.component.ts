import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { AlertService } from '@app/_services';
import { Product } from '@app/_models/product/product';
import { CartService } from '@app/_services/cart.service';
import { Properties, sizePrice } from '@app/_models/product/Properties';
import { FormGroup, FormBuilder,FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.css']
})
export class ProductpreviewComponent implements OnInit {
  form: FormGroup;
  orders = [];
 
  
  
	product: Product;
  constructor(private route: ActivatedRoute,private productService: ProductService,
    private alertService: AlertService,private cartService:CartService,
    private formBuilder: FormBuilder) {
    this.route.params.subscribe(parms => this.productId=parms.productId);
    this.form = this.formBuilder.group({
      orders: ['']
  });

  of(this.getOrders()).subscribe(orders => {
    this.orders = orders;
    this.form.controls.orders.patchValue(this.orders[0].id);
  });


  }
  
  getOrders() {
    return [
      { id: 1, name: 'S' },
      { id: 2, name: 'M' },
      { id: 3, name: 'L' },
      { id: 4, name: 'XL' }
    ];
  }

  size:any=null;
  quantity:number=1;

  private productId:any;
  ngOnInit(){
  // this.getProduct()
  
  
}



// onSelectionChange(entry) {
//   // clone the object for immutability
//   this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
//   }
  onSizeChange(value){
 this.size=value;
  }
 

 


  onQuantityChange(value){
    this.quantity=value;
  }
  addToCart(val:Number){
    console.log("entered")
    this.cartService.addProductToCart(val)
  }

getProduct(){
    this.productService.getProductById(this.productId).pipe(first()).subscribe(
      response =>{
        if(response.status=="SUCCESS"){
            this.product=response.data
			console.log(this.product)
        }}
      ,error =>{
          this.alertService.error(error)
          console.log(error)
        }
    );
  }
}
