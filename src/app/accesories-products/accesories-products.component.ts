import { Component, OnInit } from '@angular/core';
import { AppSubCategoryId } from '@app/_models/AppSubCategoryId';
import { SubCategory } from '@app/_models/SubCategory';
@Component({
  selector: 'app-accesories-products',
  templateUrl: './accesories-products.component.html',
  styleUrls: ['./accesories-products.component.css']
})
export class AccesoriesProductsComponent implements OnInit {
  
  Wristbands=AppSubCategoryId.Wristbands;
  Mugs=AppSubCategoryId.Mugs;

  Keychains= AppSubCategoryId.Keychains;
  Mobilecase= AppSubCategoryId.Mobilecase;
  PinBadges=AppSubCategoryId.PinBadges;
  PopSockets= AppSubCategoryId.PopSockets;
  constructor() { }
  
  ngOnInit(): void {
  }

}
