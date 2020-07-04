import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { CategoryService } from '@app/_services/category.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Category } from '@app/_models/product/Category';


@Component({

  templateUrl: './home.component.html',

})
export class HomeComponent{
  user: User;
  constructor(private accountService: AccountService,private categoryService: CategoryService,
    private alertService: AlertService) {

    this.user = this.accountService.userValue;
   }
   categories:Category[];
  
   ngOnInit(){
    this.getCategories();
   }

  

  getCategories(){
    console.log("entered")
    this.categoryService.getAllCategories().subscribe(response => {
      
      console.log(response)
      if(response.status=='SUCCESS'){
        this.categories=response.data
        console.log(this.categories)
      }
    },error=>
    {
        console.log(error)
    })
  }
  }