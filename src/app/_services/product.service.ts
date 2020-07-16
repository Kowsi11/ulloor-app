import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { ResponseDto } from '@app/_models/ResponseDto';
import { SubProducts } from '@app/_models/newProduct/SubProducts';
import { ProductToUse } from '@app/_models/newProduct/productToUse';
import { ProductResponse } from '@app/_models/newProduct/ProductResponse';
import { CartProduct } from '@app/_models/newProduct/CartProduct';
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private alertService: AlertService
    ) {
        
    }
    getProductsByCategoryId(categoryId : string ){
        console.log(`${environment.categoryUrl}/category/${categoryId}/products`)
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/category/${categoryId}/products`);
    }
    getProductById(productId:string){
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/product/${productId}`);
    }

    getComboProductById(comboId:string){
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/combo/${comboId}`);
    }
    getCombos(){
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/combos`); 

    }
    getCartProduct(title:string,varientId:string,quantity:Number) {
        let cartProduct:CartProduct = null
        console.log(`${environment.categoryUrl}/product/${title}?varientId=${varientId}&quantity=${quantity}`)
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/product/${title}?varientId=${varientId}&quantity=${quantity}`)
        
        
    }
    sizeCalculation(varients:SubProducts[]):any[]{
    
        let sizePriceIdList:any[]=[]
        varients.forEach(element => {
          sizePriceIdList.push({id:element.id,size:element.option1})
        });
        return sizePriceIdList;
      }
      convertProductResponse(productResponse:ProductResponse[],productService:ProductService):ProductToUse[]{
        let productoUseList:ProductToUse[]=[]
        productResponse.forEach(element => {
            productoUseList.push(new ProductToUse(element,productService))
        });
        return productoUseList
    }
    
}

6374466839