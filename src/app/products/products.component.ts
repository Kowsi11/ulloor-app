import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(parms => this.category=parms.category);
    console.log(this.category);
   }
  private category:any;
  
  

  counts: any[]=[1,2,3,4]
  ngOnInit(){
  }

}
