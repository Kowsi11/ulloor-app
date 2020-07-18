import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  form: FormGroup;
  colorAvailable: boolean;
  compareAtPriceCheck: boolean;
  priceVariesBoolean: boolean = true
  test: string = "jdnjndn"

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    // this.form = this.formBuilder.group({
    //   subCategoryName: ['', Validators.required],
    //   productTitle: ['', Validators.required],
    //   description: ['', Validators.required],
    //   priceVaries: ['', [Validators.required]],
    //   compareAtPriceVaries: ['', [Validators.required]]
    // })
    console.log("entered to constructor")
    console.log(this.priceVariesBoolean)
    this.colorAvailable = false;
    this.priceVariesBoolean = true
    this.compareAtPriceCheck = false
    this.test = "ashaujn"
  }

  onSubmit() {
    console.log(this.form)
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
    this.priceVariesBoolean = true
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()
  }
  submitForm() {

    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("img", this.form.get('img').value);

    this.http.post('http://localhost:4000', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    console.log(this.form.value)
  }
}
