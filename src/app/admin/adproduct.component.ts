import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AdminService, AlertService } from '@app/_services';

@Component({ templateUrl: 'Adproduct.component.html' })
export class AdproductComponent implements OnInit {
  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService,
        private alertService: AlertService
    ) {
       
    }
    ngOnInit() {
            
    }

  
}
