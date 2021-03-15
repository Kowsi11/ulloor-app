import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '@app/admin/productlist/productlist.component';

@Component({
    selector: 'dialog-overview-delete-dialog',
    templateUrl: 'dialog-overview-delete-product.html',
})
export class DialogOverviewDeleteProduct {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewDeleteProduct>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}