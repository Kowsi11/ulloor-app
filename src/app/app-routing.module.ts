import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_helpers';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';



const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [

  { path: 'header', component:HeaderComponent },
  { path: 'home', component:HomeComponent },
  {path : 'product/:category' , component : ProductsComponent},
      {path : 'ProductHollywood' , component : ProductsComponent},
      {path : 'ProductChennai' , component : ProductsComponent},
      {path : 'ProductFriendship' , component : ProductsComponent},
      {path : 'ProductCouple', component : ProductsComponent},
      {path : 'ProductAccessories' , component : ProductsComponent},
      {path : 'StationaryProducts' , component : ProductsComponent},
      {path : 'ProductPreview' , component : ProductpreviewComponent},
     
      {path : 'admin' , component : AdminComponent},

     {path : 'Cart' , component : CartComponent},


  {path: '', component: HomeComponent},
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
  
      
      
    ];
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
