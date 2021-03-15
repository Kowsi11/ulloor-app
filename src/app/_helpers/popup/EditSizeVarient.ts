import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '@app/admin/productlist/productlist.component';
import { SubProducts } from '@app/_models/newProduct/SubProducts';

@Component({
    selector: 'dialog-overview-For-Varient',
    templateUrl: 'dialog-overview-For-Varient.html',
})
export class DialogOverviewForVarient {


    constructor(
        public dialogRef: MatDialogRef<DialogOverviewForVarient>,
        @Inject(MAT_DIALOG_DATA) public subProduct: SubProducts) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}