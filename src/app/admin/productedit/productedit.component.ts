import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { ProductResponse } from '@app/_models/newProduct/ProductResponse';
import { AlertService } from '@app/_services';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Media } from '@app/_models/newProduct/Media';
import { ImageWithPosition } from '@app/_models/newProduct/ImageWithPosition';
import { Product } from '@app/_models/product/product';
import { ImageDomain } from '@app/_models/ImageDomain';
import { UpdateProduct } from '@app/_models/newProduct/update/updateProduct';
import { UpdateSubProduct } from '@app/_models/newProduct/update/UpdateSubProduct';
import { SubProducts } from '@app/_models/newProduct/SubProducts';
import { DialogOverviewForVarient } from '@app/_helpers/popup/EditSizeVarient';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewDeleteProduct } from '@app/_helpers/popup/DeleteProductPopUp';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  //matchips props

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];



  productId: string
  productTitle: string
  product: ProductResponse
  tags: string[]
  productDesc: string = ""

  productCompareCheck: Boolean
  productComparePrice: number
  productPrice: number
  subProducts: SubProducts[]

  oldImages: string[]

  images: Media[] = []
  imageResponse: ImageWithPosition[];

  size1: UpdateSubProduct
  size2: UpdateSubProduct
  size3: UpdateSubProduct
  size4: UpdateSubProduct
  size5: UpdateSubProduct

  priceForm: FormGroup = this.formBuilder.group({
    price: ['', Validators.required],
    comparePrice: ['', [Validators.required]]
  })
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, public dialog: MatDialog, private router: Router, private productService: ProductService, private alertService: AlertService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.route.params.subscribe(parms => this.productId = parms.productId);

    this.getProduct()

  }

  ngOnInit(): void {
    this.getProduct()

  }

  updateProductService(updateProduct: UpdateProduct) {
    this.productService.updateProduct(this.product.id, updateProduct).subscribe(
      response => {
        console.log(response)
        if (response.status == "SUCCESS") {
          this.router.navigate([this.router.url])
        }
      },
      error => {
        this.alertService.error(error)

      }
    )
  }
  getProduct() {
    this.productService.getProductIDForAdmin(this.productId).pipe(first()).subscribe(
      response => {
        if (response.status == "SUCCESS") {
          this.product = response.data
          this.tags = this.product.tags
          this.productDesc = this.product.description
          this.productTitle = this.product.title
          this.productCompareCheck = this.product.compareAtPriceVaries
          this.productComparePrice = this.product.compareAtPriceMax
          this.productPrice = this.product.price
          this.oldImages = this.product.images
          this.subProducts = this.product.variants


        }
      },
      error => {
        this.alertService.error(error)

      }
    )
  }
  uploadImageToServer() {

    let imageDomain = new ImageDomain()
    if (this.images.length > 0) {
      imageDomain.productName = this.product.title
      imageDomain.oldImageUrl = this.product.images
      imageDomain.images = this.images

      console.log(imageDomain)
      this.productService.uploadImage(imageDomain).subscribe(
        response => {
          console.log(response)
          if (response.status == "SUCCESS") {
            this.alertService.success("image uploaded successfully")
            console.log("success")

            console.log(response)
            console.log(response.data)

            this.imageResponse = response.data

          }

        }
        , error => {

          this.alertService.error("Image not uploaded")
          console.log(error)

        }
      );

    }
    console.log("in admin")
    console.log(this.imageResponse)
  }



  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  removeImage(url) {
    var idx = this.images.indexOf(url);
    if (idx != -1) {

      this.images.splice(idx, 1); // The second parameter is the number of elements to remove.
    }
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
    let updateProduct = new UpdateProduct()
    updateProduct.tags = this.tags
    this.updateProductService(updateProduct)
  }
  //product descripton
  submitDesc() {
    let updateProduct = new UpdateProduct()
    updateProduct.description = this.productDesc
    this.updateProductService(updateProduct)
  }
  priceUpdate() {
    // console.log(this.priceForm.value)
    console.log(this.productPrice + "-" + this.productComparePrice + "-" + this.productCompareCheck)
    let updateProduct = new UpdateProduct()
    updateProduct.price = this.productPrice
    updateProduct.compareAtPriceVaries = this.productCompareCheck
    updateProduct.compareAtPriceMax = this.productComparePrice
    updateProduct.compareAtPriceMin = this.productComparePrice
    this.updateProductService(updateProduct)
  }
  uploadImageToProduct() {
    let updateProduct = new UpdateProduct()
    updateProduct.imageWithPosition = this.imageResponse
    this.updateProductService(updateProduct)
  }

  openSizeDialog(subProduct: SubProducts): void {
    const dialogRef = this.dialog.open(DialogOverviewForVarient, {
      width: '350px',
      data: subProduct
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let updateSubProduct = new UpdateSubProduct()
        updateSubProduct.id = result.id
        updateSubProduct.stockAvailable = result.stockAvailable
        updateSubProduct.inventoryQuantity = result.inventoryQuantity
        updateSubProduct.price = result.price
        updateSubProduct.weight = result.weight
        updateSubProduct.available = result.available

        let updateProduct = new UpdateProduct()
        updateProduct.size = [updateSubProduct]
        //console.log('The dialog was closed ' + result.id + '-' + result.stockAvailable);
        this.updateProductService(updateProduct)



      }

    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DialogOverviewDeleteProduct, {
      width: '250px',
      data: { name: this.productTitle, id: this.productId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log('The dialog was closed ' + result);
        this.router.navigateByUrl("/admin/productedit/" + result)
      }

    });
  }

}
