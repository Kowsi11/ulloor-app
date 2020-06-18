import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Category } from '@app/_models/Category';
import { ResponseDto } from '@app/_models/ResponseDto';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private categorySubject: BehaviorSubject<Category>;
    public category: Observable<Category>;
    constructor(
        private router: Router,
        private http: HttpClient
    ){
    
    }

    getAllCategories() {
        console.log('entered to lient')
        console.log(`${environment.categoryUrl}/categories`)
        return this.http.get<ResponseDto>(`http://localhost:7070/api/ullormerchandise/categories`);
    }
}