import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdlayoutComponent} from './adlayout.component';
import { AdproductComponent } from './adproduct.component';
import { AdcombosComponent } from './adcombos.component';


const routes: Routes = [
    {
        path: '', component: AdlayoutComponent,
        children: [
            { path: 'adproduct', component: AdproductComponent },
            { path: 'adcombos', component: AdcombosComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }