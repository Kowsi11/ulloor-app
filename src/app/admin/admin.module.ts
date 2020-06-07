import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdlayoutComponent } from './adlayout.component';
import { AdproductComponent } from './adproduct.component';
import { AdcombosComponent} from './adcombos.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdlayoutComponent,
        AdproductComponent,
        AdcombosComponent
    ]
})
export class AdminModule { }