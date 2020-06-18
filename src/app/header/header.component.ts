import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
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
  private userSubject:BehaviorSubject<User>
 loggedin:any;
 notlogged:any;
 Logout:any;
  constructor( private router: Router,) { 

  }

  public get userValue(): User {
   return this.userSubject.value;
}
  
  ngOnInit() {
   
    this.userSubject =new BehaviorSubject<User>(JSON.parse (localStorage.getItem('user')));
      
    if(this.userSubject!=null)
     {
      this.loggedin=true;

     }
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


    

    


