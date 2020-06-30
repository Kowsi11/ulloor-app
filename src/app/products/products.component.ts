import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { Product } from '@app/_models/product';
import { Properties, sizePrice } from '@app/_models/Properties';
import { AlertService } from '@app/_services/alert.service';



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

  sizeCalculation(properties:Properties[]):sizePrice[]{

    let sizePriceList:sizePrice[]=[]

    properties.forEach(element => {
      if(element.available==true){
        element.attributes.forEach(element2 =>{
        
          if(element2.name=="SIZE"|| element2.name=="size"){
            let sizePriceObject= new sizePrice()
            sizePriceObject.size= element2.value
            sizePriceObject.price= element.price
    
            
            sizePriceList.push(sizePriceObject)
          } 
   
        });
      }
      
    });
    return sizePriceList
  }

plus(){
console.log("plus")
}
minus(){
console.log("minus")
}
  private category:any;
  size:string=null;
  quantity:number=1;
  onSizeChange(value):string{
    this.size=value;
    return this.size;
  }
  onQuantityChange(value){
    this.quantity=value;
  }
   
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
