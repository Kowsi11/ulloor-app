import { Component, OnInit } from '@angular/core';
import { AppSubCategoryHandle } from '@app/_models/product/AppSubCategoryHandle';

@Component({
  selector: 'app-collections-products',
  templateUrl: './collections-products.component.html',
  styleUrls: ['./collections-products.component.css']
})
export class CollectionsProductsComponent implements OnInit {


  Hollywood = AppSubCategoryHandle.Hollywood;
  Kollywood = AppSubCategoryHandle.Kollywood;
  ChennaiMania = AppSubCategoryHandle.ChennaiMania;
  Couple = AppSubCategoryHandle.Couple;
  Friendship = AppSubCategoryHandle.Friendship;

  constructor() { }

  ngOnInit(): void {
  }

}
