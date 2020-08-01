import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoaderComponent } from './loader/loader.component';
import { CombosComponent } from './combos/combos.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { StationaryProductsComponent } from './stationary-products/stationary-products.component';
import { AccesoriesProductsComponent } from './accesories-products/accesories-products.component';
import { CollectionsProductsComponent } from './collections-products/collections-products.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { fakeBackendProvider } from './_helpers';

import { CheckoutComponent } from './checkout/checkout.component'

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';
import { FilterPipe } from './filter.pipe';
import { CategoriesComponent } from './categories/categories.component';
import { HomeBannersComponent } from './home-banners/home-banners.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProducteditComponent } from './admin/productedit/productedit.component';
import { AdminComponent } from './admin/admin.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    LoaderComponent,
    CombosComponent,
    AboutusComponent,
    SliderComponent,
    FooterComponent,
    StationaryProductsComponent,
    AccesoriesProductsComponent,
    CollectionsProductsComponent,
    ProductpreviewComponent,
    CartComponent,
    AlertComponent,
    FilterPipe,
    CategoriesComponent,
    HomeBannersComponent,
    TestimonialsComponent,
    CheckoutComponent,
    AdminComponent,



  ],
  imports: [
    BrowserModule,

    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule,
    MatRadioModule,
    MatSlideToggleModule



  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }