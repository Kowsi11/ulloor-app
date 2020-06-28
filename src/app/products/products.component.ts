import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { AlertService } from '@app/_services';
import { Product } from '@app/_models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[]
  constructor(private route: ActivatedRoute,private productService: ProductService,
    private alertService: AlertService) {
    this.route.params.subscribe(parms => this.category=parms.category);
    
    console.log(this.category);
   }
  private category:any;
  size:any=null;
  quantity:number=1;
  onSizeChange(value){
    this.size=value;
     }
     onQuantityChange(value){
       this.quantity=value;
     }
   
  counts: any[]=[1,2,3,4]
  ngOnInit(){
    this.getProducts()
  }

  getProducts(){
    this.productService.getProductsByCategoryId(this.category).pipe(first()).subscribe(
      response =>{
        if(response.status=="SUCCESS"){
            this.products=response.data
			console.log(this.products)
        }}
      ,error =>{
          this.alertService.error(error)
          console.log(error)
        }
    );
  }
}
