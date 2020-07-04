import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'useraddress.component.html' })
export class UserAddressComponent  {
    user:User ;

    constructor(private accountService: AccountService) {}

     ngOnInit() {
        this.user = this.accountService.userValue
    }
}