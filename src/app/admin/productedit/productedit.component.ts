import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { ProductResponse } from '@app/_models/newProduct/ProductResponse';
import { AlertService } from '@app/_services';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  //matchips props

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  productId: string
  product: ProductResponse
  tags: string[]
  productDesc: string = ""
  constructor(private route: ActivatedRoute, private productService: ProductService, private alertService: AlertService) {
    this.route.params.subscribe(parms => this.productId = parms.productId);

  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productService.getProductIDForAdmin(this.productId).pipe(first()).subscribe(
      response => {
        if (response.status == "SUCCESS") {
          this.product = response.data
          this.tags = this.product.tags
          this.productDesc = this.product.description
        }
      },
      error => {
        this.alertService.error(error)

      }
    )
  }

  //tags
  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }


    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  submitTag() {

  }
  //product descripton
  submitDesc() {

  }

}
