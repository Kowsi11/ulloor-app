import { Component, OnInit } from '@angular/core';
import { AppSubCategoryHandle } from '@app/_models/product/AppSubCategoryHandle';
@Component({
  selector: 'app-accesories-products',
  templateUrl: './accesories-products.component.html',
  styleUrls: ['./accesories-products.component.css']
})
export class AccesoriesProductsComponent implements OnInit {

  Wristbands = AppSubCategoryHandle.Wristbands;
  Mugs = AppSubCategoryHandle.Mugs;

  Keychains = AppSubCategoryHandle.Keychains;
  Mobilecase = AppSubCategoryHandle.Mobilecase;
  PinBadges = AppSubCategoryHandle.PinBadges;
  PopSockets = AppSubCategoryHandle.PopSockets;
  photoFrames = AppSubCategoryHandle.PhotoFrames
  constructor() { }

  ngOnInit(): void {
  }

}
