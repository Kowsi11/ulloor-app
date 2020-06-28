import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'useraddress.component.html' })
export class UserAddressComponent  {
    users = null;

    // constructor(private accountService: AccountService) {}

    // ngOnInit() {
    //     this.accountService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }

    // deleteUser(id: string) {
    //     const user = this.users.find(x => x.id === id);
    //     user.isDeleting = true;
    //     this.accountService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => {
    //             this.users = this.users.filter(x => x.id !== id) 
    //         });
    // }
}