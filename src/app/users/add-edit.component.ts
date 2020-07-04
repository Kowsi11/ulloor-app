import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {

    country = [
        {name: 'Arizona', abbrev: 'AZ'},
        {name: 'California', abbrev: 'CA'},
        {name: 'Colorado', abbrev: 'CO'},
        {name: 'New York', abbrev: 'NY'},
        {name: 'Pennsylvania', abbrev: 'PA'},
      ];


    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    user: User;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {
        this.user=accountService.userValue;
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    
        
        /*const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }*/

        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            doorNum: ['', Validators.required],
            street: ['', Validators.required],
            landMark: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            pincode: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            type: ['', Validators.required]
			
        });
    }
	get f() { return this.form.controls; }

    onSubmit() {
        this.accountService.updateAddress(this.user.id, this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    localStorage.setItem('user', JSON.stringify(data.data));
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    //this.router.navigate(['..', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }      
}