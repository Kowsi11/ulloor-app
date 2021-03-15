import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '@app/_helpers/popup/EditProductPopUp';
import { SelectAddressPopup } from '@app/_helpers/popup/SelectAddressPopUp';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public dialog: MatDialog, private overlay: Overlay) { }

  ngOnInit(): void {
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;


  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  openDialog(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition()
    const dialogRef = this.dialog.open(SelectAddressPopup, {
      width: '100%',
      position: { bottom: '100' },
      data: { name: "ajith", id: "uio" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log('The dialog was closed ' + result);
        //this.router.navigateByUrl("/admin/productedit/" + result)
      }

    });
  }

}
