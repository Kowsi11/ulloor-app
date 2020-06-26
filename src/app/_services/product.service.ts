import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { ResponseDto } from '@app/_models/ResponseDto';

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        
    }
    getProductsByCategoryId(categoryId : string){
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/products/${categoryId}`);
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
}

