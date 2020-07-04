import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { AlertService } from '@app/_services';
import { Product } from '@app/_models/product/product';
import { CartService } from '@app/_services/cart.service';
@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.css']
})
export class ProductpreviewComponent implements OnInit {
  
	product: Product;
  constructor(private route: ActivatedRoute,private productService: ProductService,
    private alertService: AlertService,private cartService:CartService) {
		this.route.params.subscribe(parms => this.productId=parms.productId);
	}

  size:any=null;
  quantity:number=1;

  private productId:any;
  ngOnInit(){
  this.getProduct()
  }
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
