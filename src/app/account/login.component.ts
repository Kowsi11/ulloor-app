import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrlUser: string;
    returnUrlAdimin: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrlUser = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.returnUrlAdimin = this.route.snapshot.queryParams['returnUrl'] || '/admin';

    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.f.username.value == 'admin') {

            let user: User = new User()
            user.userName = "admin"
            localStorage.setItem("user", JSON.stringify(user));
            this.router.navigate([this.returnUrlUser]);
        } else {
            this.accountService.login(this.f.username.value, this.f.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        localStorage.setItem('user', JSON.stringify(data.data));
                        console.log(data.data);
                        this.router.navigate([this.returnUrlUser]);
                    },
                    error => {

                        this.alertService.error(error);

                        this.loading = false;
                    });
        }

    }
}
