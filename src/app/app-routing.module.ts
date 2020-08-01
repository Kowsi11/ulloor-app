import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_helpers';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';

import { HomeBannersComponent } from './home-banners/home-banners.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { StationaryProductsComponent } from './stationary-products/stationary-products.component';
import { CombosComponent } from './combos/combos.component';
import { ProducteditComponent } from './admin/productedit/productedit.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [

  { path: 'header', component:HeaderComponent },
  { path: 'home', component:HomeComponent },
  {path: 'home-banners',component:HomeBannersComponent},
  {path : 'product/:category' , component : ProductsComponent},
      {path : 'ProductHollywood' , component : ProductsComponent},
      {path : 'ProductChennai' , component : ProductsComponent},
      {path : 'ProductFriendship' , component : ProductsComponent},
      {path : 'ProductCouple', component : ProductsComponent},
      {path : 'ProductAccessories' , component : ProductsComponent},
      {path : 'StationaryProducts' , component : StationaryProductsComponent},
      {path : 'product/:category/Product/view/:productId' , component : ProductpreviewComponent},
      {path : 'product/view/:productId' , component : ProductpreviewComponent},
      
      {path : 'combo/:category' , component : CombosComponent},
     
      {path : 'admin' , component : AdminComponent},

      {path : 'admin/productedit' , component : ProducteditComponent},

     {path : 'Cart' , component : CartComponent},
      {path : 'checkout',component:CheckoutComponent},

  {path: '', component: HomeComponent},
    { path: 'users', loadChildren: usersModule },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
  
      
      
    ];
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
