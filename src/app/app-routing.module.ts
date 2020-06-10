import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_helpers';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';



const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [

  { path: 'header', component:HeaderComponent },
  { path: 'home', component:HomeComponent },
  {path : 'ProductKollywood' , component : ProductsComponent},
      {path : 'ProductHollywood' , component : ProductsComponent},
      {path : 'ProductChennai' , component : ProductsComponent},
      {path : 'ProductFriendship' , component : ProductsComponent},
      {path : 'ProductCouple', component : ProductsComponent},
     {path : 'ProductPreview' , component : ProductpreviewComponent},
  

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
