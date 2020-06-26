import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stationary-products',
  templateUrl: './stationary-products.component.html',
  styleUrls: ['./stationary-products.component.css']
})
export class StationaryProductsComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  
  ngOnInit() {
      // an example array of 150 items to be paged
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }
}
