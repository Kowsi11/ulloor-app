import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Media } from '@app/_models/newProduct/Media';
import { ImageDomain } from '@app/_models/ImageDomain';
import { title } from 'process';
import { ProductService } from '@app/_services/product.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  images: Media[] = []
  form: FormGroup;
  colorAvailable: boolean;
  compareAtPriceCheck: boolean;
  priceVariesBoolean: boolean = false
  test: string = "jdnjndn"
  subCategory: string
  title: string

  category: string;
  constructor(public formBuilder: FormBuilder, private http: HttpClient, private productService: ProductService) {

    this.form = this.formBuilder.group({
      subCategoryName: ['', Validators.required],
      productTitle: ['', Validators.required],
      description: ['', Validators.required],
      priceVaries: ['', [Validators.required]],
      compareAtPriceVaries: ['', [Validators.required]],
      price: ['', [Validators.required]],
      compareAtPriceMin: ['', Validators.required],
      tags: ['', [Validators.required]],
      color: ['', [Validators.required]],
      size1_name: ['', [Validators.required]],
      size1_available: ['', [Validators.required]],
      size1_quantity: ['', [Validators.required]],
      size1_weight: ['', [Validators.required]],
      size1_price: ['', [Validators.required]],
      size1_default: ['', [Validators.required]],
      size2_name: ['', [Validators.required]],
      size2_available: ['', [Validators.required]],
      size2_quantity: ['', [Validators.required]],
      size2_weight: ['', [Validators.required]],
      size2_price: ['', [Validators.required]],
      size2_default: ['', [Validators.required]],
      size3_name: ['', [Validators.required]],
      size3_available: ['', [Validators.required]],
      size3_quantity: ['', [Validators.required]],
      size3_weight: ['', [Validators.required]],
      size3_price: ['', [Validators.required]],
      size3_default: ['', [Validators.required]],
      size4_name: ['', [Validators.required]],
      size4_available: ['', [Validators.required]],
      size4_quantity: ['', [Validators.required]],
      size4_weight: ['', [Validators.required]],
      size4_price: ['', [Validators.required]],
      size4_default: ['', [Validators.required]],
      size5_name: ['', [Validators.required]],
      size5_available: ['', [Validators.required]],
      size5_quantity: ['', [Validators.required]],
      size5_weight: ['', [Validators.required]],
      size5_price: ['', [Validators.required]],
      size5_default: ['', [Validators.required]],
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])

    })
    console.log("entered to constructor")
    console.log(this.priceVariesBoolean)
    this.colorAvailable = false;
    this.priceVariesBoolean = false
    this.compareAtPriceCheck = false
    this.test = "ashaujn"
  }
  getCategory(value) {
    this.category = value
  }
  getSubCategory(value) {
    this.subCategory = value
  }

  onSubmit() {
    console.log(this.category)
    console.log("admin submit")
    console.log(this.form.value)
  }
  colorAvaliableCheck() {
    this.colorAvailable = !this.colorAvailable
  }
  priceVariesCheck(isChecked: boolean) {
    console.log("price varies check " + isChecked)
    this.test = "ashaujn"
    this.priceVariesBoolean = isChecked;
  }
  compareAtPriceVaries(isChecked: boolean) {
    this.compareAtPriceCheck = isChecked
  }
  getcompareAtPriceVaries() {
    return this.compareAtPriceCheck
  }

  ngOnInit() {
    this.colorAvailable = false
    this.priceVariesBoolean = false
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
          console.log(event.target.result);
          this.images.push(event.target.result);
          console.log(this.images)
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

    console.log(this.category + "------" + this.subCategory + "---------" + this.title)
    if (this.images.length > 0) {
      imageDomain = new ImageDomain(this.category, this.subCategory, this.title, this.images)

      this.productService.uploadImage(imageDomain)
    }
    console.log("upload image to server")
  }
  submitForm() {

    console.log("admin submit " + this.form.value)

    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("img", this.form.get('img').value);

  }
}
