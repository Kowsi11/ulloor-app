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


  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      img: [null]
    })
   
  }

  




  ngOnInit() {
    
   
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
