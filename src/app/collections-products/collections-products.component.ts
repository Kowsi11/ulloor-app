import { Component, OnInit } from '@angular/core';
import { AppSubCategoryId } from '@app/_models/AppSubCategoryId';

@Component({
  selector: 'app-collections-products',
  templateUrl: './collections-products.component.html',
  styleUrls: ['./collections-products.component.css']
})
export class CollectionsProductsComponent implements OnInit {

  
  Hollywood= AppSubCategoryId.Hollywood;
  Kollywood=AppSubCategoryId.Kollywood;
  ChennaiMania= AppSubCategoryId.ChennaiMania;
  Couple=AppSubCategoryId.Couple;
  Friendship= AppSubCategoryId.Friendship;
  
  constructor() { }

  ngOnInit(): void {
  }

}
