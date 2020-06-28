import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
 
  collection = { count: 60, data: [] };
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };
  
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
    };
  products: Product[]=[]
  constructor(private route: ActivatedRoute,private productService: ProductService,
    private alertService: AlertService) {
    this.route.params.subscribe(parms => this.category=parms.category);
    
    console.log(this.category);
 //Create dummy data
 for (var i = 0; i < this.collection.count; i++) {
  this.collection.data.push(
    {
      id: i + 1,
      value: "items number " + (i + 1)
    }
  );
}

this.config = {
  itemsPerPage: 12,
  currentPage: 1,
  totalItems: this.collection.count
};
    
   }
  
 
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }


  private category:any;

  counts: any[]=[1,2,3,4]
  ngOnInit(){
    this.getProducts()
      // an example array of 150 items to be paged
     
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
