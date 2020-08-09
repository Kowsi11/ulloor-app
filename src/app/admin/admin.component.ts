import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, FormGroupDirective, NgForm, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Media } from '@app/_models/newProduct/Media';
import { ImageDomain } from '@app/_models/ImageDomain';
import { ProductService } from '@app/_services/product.service';
import { CategoryHandle, SubCategoryValue } from '@app/_models/product/Category';
import { ColorTemplate, Color } from '@app/_models/Color';
import { ImageWithPosition } from '@app/_models/newProduct/ImageWithPosition';
import { ErrorStateMatcher } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { AlertService } from '@app/_services';
export interface MatChips {
  name: string;
}
export function titleValidator(titleValue: AbstractControl) {

  //productNames = this.productService.getProductNames()

  let productNames = ["hi", "bye"]
  if (productNames != null) {

    productNames.forEach(element => {
      if (element == titleValue.value as string) {
        return { titleValidator: true };
      } else {
        return null
      }
    });
  } else {
    return null
  }


  return { titleValidator: true }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  size1Available: boolean = false
  size2Available: boolean = false
  size3Available: boolean = false
  size4Available: boolean = false
  size5Available: boolean = false

  sizeSAvailable: boolean = true
  subCategories: CategoryHandle[] = [];
  images: Media[] = []

  colorAvailable: boolean;
  compareAtPriceCheck: boolean = false;
  priceVariesBoolean: boolean = false
  test: string = "jdnjndn"
  subCategory: string
  title: string
  titleAlreadyExist: Boolean = true

  category: string;
  collectionCheck: Boolean = false;
  accessoriesCheck: Boolean = false;
  stationariesCheck: Boolean = false;

  imageResponse: ImageWithPosition[];

  categoryList = [{
    name: "Accessories", handle: "accessories"
  },
  {
    name: "Collection", handle: "collection"
  },
  {
    name: "Stationaries", handle: "stationaries"
  }
  ]


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = ["collections"];
  color: string[] = []

  matcher = new MyErrorStateMatcher();

  form: FormGroup = this.formBuilder.group({
    subCategoryName: ['', Validators.required],
    productTitle: ['', Validators.required, titleValidator],
    description: ['', Validators.required],
    priceVaries: this.priceVariesBoolean,
    compareAtPriceVaries: ['', [Validators.required]],
    price: ['', [Validators.required]],
    compareAtPriceMin: this.compareAtPriceCheck,
    tags: ['', [Validators.required]],
    color: ['', [Validators.required]],
    size1_name: ['', [Validators.required]],
    size1_available: ['', [Validators.required]],
    size1_stock_available: ['', [Validators.required]],
    size1_quantity: ['', [Validators.required]],
    size1_weight: ['', [Validators.required]],
    size1_price: ['', [Validators.required]],
    size1_default: ['', [Validators.required]],
    size2_name: ['', [Validators.required]],
    size2_available: ['', [Validators.required]],
    size2_stock_available: ['', [Validators.required]],
    size2_quantity: ['', [Validators.required]],
    size2_weight: ['', [Validators.required]],
    size2_price: ['', [Validators.required]],
    size2_default: ['', [Validators.required]],
    size3_name: ['', [Validators.required]],
    size3_available: ['', [Validators.required]],
    size3_stock_available: ['', [Validators.required]],
    size3_quantity: ['', [Validators.required]],
    size3_weight: ['', [Validators.required]],
    size3_price: ['', [Validators.required]],
    size3_default: ['', [Validators.required]],
    size4_name: ['', [Validators.required]],
    size4_available: ['', [Validators.required]],
    size4_stock_available: ['', [Validators.required]],
    size4_quantity: ['', [Validators.required]],
    size4_weight: ['', [Validators.required]],
    size4_price: ['', [Validators.required]],
    size4_default: ['', [Validators.required]],
    size5_name: ['', [Validators.required]],
    size5_available: ['', [Validators.required]],
    size5_stock_available: ['', [Validators.required]],
    size5_quantity: ['', [Validators.required]],
    size5_weight: ['', [Validators.required]],
    size5_price: ['', [Validators.required]],
    size5_default: ['', [Validators.required]],
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  })
  constructor(public formBuilder: FormBuilder, private http: HttpClient, private productService: ProductService,
    private alertService: AlertService) {


    // this.form.valueChanges.subscribe((value) => {
    //   console.log("check990")
    //   value.size1_stock_available ? this.form.get('size1_quantity').disabled : this.form.get('size1_quantity').enable()
    // })

    this.colorAvailable = false;
    this.priceVariesBoolean = false
    this.compareAtPriceCheck = false
    this.test = "ashaujn"
  }
  get f() {
    return this.form.controls;
  }
  getCategory(value) {
    console.log("category logic " + value)
    this.category = value
    let subCat = new SubCategoryValue()
    if (this.category === 'collections') {
      this.subCategories = subCat.getCollections()
      this.collectionCheck = true
      this.stationariesCheck = false
      this.accessoriesCheck = false
    } else if (this.category === 'stationaries') {
      this.subCategories = subCat.getStationary()
      this.collectionCheck = false
      this.stationariesCheck = true
      this.accessoriesCheck = false
    } else if (this.category === 'accessories') {
      this.subCategories = subCat.getAccesories()
      this.collectionCheck = false
      this.stationariesCheck = false
      this.accessoriesCheck = true
    }
  }
  getSubCategory(value) {
    console.log(value)
    this.subCategory = value
  }

  saveProduct() {
    console.log(this.category)
    console.log("admin submit")
    console.log(this.form.value)

    let productRequest = this.productService.generateProductResponse(this.form.value, this.imageResponse, this.category, this.color, this.tags)
    console.log(productRequest)
    this.productService.saveProduct(productRequest)
  }
  colorAvaliableCheck() {
    this.colorAvailable = !this.colorAvailable
  }
  priceVariesCheck(isChecked: boolean) {
    this.priceVariesBoolean = !isChecked;
  }
  compareAtPriceVaries(isChecked: boolean) {
    this.compareAtPriceCheck = !isChecked
  }





  ngOnInit() {
    this.colorAvailable = false
    this.priceVariesBoolean = false
    this.compareAtPriceCheck = false
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("file upload")
    console.log(file)
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()
  }
  removeImage(url) {
    var idx = this.images.indexOf(url);
    if (idx != -1) {

      this.images.splice(idx, 1); // The second parameter is the number of elements to remove.
    }
  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push(event.target.result);
          this.form.patchValue({
            fileSource: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  uploadImageToServer() {
    let imageDomain

    if (this.images.length > 0) {
      imageDomain = new ImageDomain(this.category, this.subCategory, this.form.value.productTitle, this.images)

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
  submitForm() {

    console.log("admin submit " + this.form.value)

    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("img", this.form.get('img').value);

  }


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

  addColor(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    let colors = new ColorTemplate()
    // Add our tags
    if ((value || '').trim()) {

      let hex = colors.getHex(value.replace(/\s/g, "").toLowerCase())
      if (hex != null) {
        this.color.push(value.toUpperCase());
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeColor(color: string): void {
    const index = this.color.indexOf(color);

    if (index >= 0) {
      this.color.splice(index, 1);
    }
  }

}
