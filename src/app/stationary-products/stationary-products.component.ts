import { Component, OnInit } from '@angular/core';
import { AppSubCategoryHandle } from '@app/_models/product/AppSubCategoryHandle';

@Component({
  selector: 'app-stationary-products',
  templateUrl: './stationary-products.component.html',
  styleUrls: ['./stationary-products.component.css']
})
export class StationaryProductsComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  NotePad = AppSubCategoryHandle.Notepad;
  Stickers = AppSubCategoryHandle.Stickers;
  A3_Posters = AppSubCategoryHandle.A3Posters;

  ngOnInit() {

  }
}
