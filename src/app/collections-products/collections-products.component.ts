import { Component, OnInit } from '@angular/core';
import { AppSubCategoryHandle } from '@app/_models/product/AppSubCategoryHandle';

@Component({
  selector: 'app-collections-products',
  templateUrl: './collections-products.component.html',
  styleUrls: ['./collections-products.component.css']
})
export class CollectionsProductsComponent implements OnInit {


  Wristbands = AppSubCategoryHandle.Wristbands;
  Mugs = AppSubCategoryHandle.Mugs;

  Keychains = AppSubCategoryHandle.Keychains;
  Mobilecase = AppSubCategoryHandle.Mobilecase;
  PinBadges = AppSubCategoryHandle.PinBadges;
  PopSockets = AppSubCategoryHandle.PopSockets;
  photoFrames = AppSubCategoryHandle.PhotoFrames

  Hollywood = AppSubCategoryHandle.Hollywood;
  Kollywood = AppSubCategoryHandle.Kollywood;
  ChennaiMania = AppSubCategoryHandle.ChennaiMania;
  Couple = AppSubCategoryHandle.Couple;
  Friendship = AppSubCategoryHandle.Friendship;

  constructor() { }

  ngOnInit(): void {
  }

}
