import { Component, OnInit } from '@angular/core';
import { Product } from '@app/_models/product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {

  products: Product[]=[]
  constructor(private route: ActivatedRoute,private productService: ProductService,
    private alertService: AlertService) {
    this.route.params.subscribe(parms => this.category=parms.category);
    
    console.log(this.category);
   }
  private category:any;

  counts: any[]=[1,2,3,4]
  ngOnInit(){
    this.getProducts()
  }

  getProducts(){
    this.productService.getProductsByCategoryId(this.category).pipe(first()).subscribe(
      response =>{
        if(response.status=="SUCCESS"){
            this.products=response.data
        }}
      ,error =>{
          this.alertService.error(error)
        }
    );
  }


}
