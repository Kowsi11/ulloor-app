import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '@app/_services';

@Component({ templateUrl: 'adlayout.component.html' })
export class AdlayoutComponent {
    constructor(
        private router: Router
//private accountService: AccountService
     )
     {
        // redirect to home if already logged in
         // if (this.accountService.userValue) {
         //     this.router.navigate(['/']);
        // }
     }
    }