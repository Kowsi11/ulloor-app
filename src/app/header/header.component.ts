import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service';
import { Product } from '@app/_models/product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mycart : String = "cart-parent " ;
  mysearch : String = "search-parent " ;
  numone  : Number = 0 ;
  numtwo :  Number = 0 ;
  cartSize:number = 0;
  cartProducts:Product[];
  carts: number[]= [1,2,3,4];
  private userSubject:BehaviorSubject<User>
 loggedin:any;
 notlogged:any;
<<<<<<< HEAD
 Logout:any;
  constructor( private router: Router,) { 
=======
  constructor( private router: Router,private cartService:CartService ) { 
>>>>>>> 91dfdf02bcaca776d28a8da753fe7af42c678618

  }

  

  public get userValue(): User {
   return this.userSubject.value;
}
  
  ngOnInit() {
   this.userLoggedInfo()
}

  getCartDetails(){
    this.cartProducts=this.cartService.cartValue;
    if(this.cartProducts!=null){
      this.cartSize=this.cartProducts.length
    }
  }
  removeFromCart(product:any){
    console.log("entered the logic")
    console.log(product)
    var idx = this.carts.indexOf(product);
    if (idx != -1) {
     
        this.carts.splice(idx, 1); // The second parameter is the number of elements to remove.
      }
      
  
    console.log(this.carts.length)
  }


  
  userLoggedInfo()
  {
    this.userSubject =new BehaviorSubject<User>(JSON.parse (localStorage.getItem('user')));
      console.log(this.userSubject)
    if(this.userSubject.value!=null)
     {
      this.loggedin=true;
      this.notlogged=false;

     }
<<<<<<< HEAD
   else{
   this.loggedin=false;
 }
 if(this.userSubject==null)
 {
  this.notlogged=true;

 }
else{
this.notlogged=false;
}




if(this.Logout)
{
  
  localStorage.removeItem('user');
  this.userSubject.next(null);
  this.router.navigate(['/home']);
}

     
}

=======
    else
    {
      this.notlogged=true;
      this.loggedin=false;
    }
  }
>>>>>>> 91dfdf02bcaca776d28a8da753fe7af42c678618

  mycartfun()
  {
    if (this.numone === 0 ){
      this.mycart += 'active' ;
      this.numone = 1 ;
      }else if (this.numone === 1)
  {
    this.mycart = "cart-parent " ; 
    this.numone = 0 ;
   }
  }
  mysearchfun()
  {
    if (this.numtwo === 0 ){
      this.mysearch += 'active' ;
      this.numtwo = 1 ;
      }else if (this.numtwo === 1)
  {
    this.mysearch = "search-parent " ; 
    this.numtwo = 0 ;
   }
  }


  


}


    

    


