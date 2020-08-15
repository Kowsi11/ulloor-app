import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, merge, observable } from 'rxjs';
import { startWith, switchMap, map, catchError, first } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from '@app/_services/product.service';
import { AlertService } from '@app/_services';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '@app/_helpers/popup/EditProductPopUp';
import { Router } from '@angular/router';
export interface DialogData {
  id: string;
  name: string;
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export interface AdminProduct {
  sno: number
  id: string
  title: string
  category: string
  handle: string
  createdAt: string
  price: string
  available: Boolean
}
/** Constants used to fill up our data base. */

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})


export class ProductlistComponent {
  name = 'Angular 5';
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };
  constructor(private productService: ProductService, private alertService: AlertService, public dialog: MatDialog, private router: Router) {
    // Create 100 users
    const users: UserData[] = [];
    let adminProduct: AdminProduct[] = []
    var users1;
    productService.getAllProductsForAdmin().pipe(first()).subscribe(response => {
      if (response.status == "SUCCESS") {
        users1 = response.data
        console.log(users1)
        for (let index = 0; index < users1.length; index++) {
          adminProduct.push({
            "sno": index + 1, "id": users1[index].id, "title": users1[index].title, "category": users1[index].subCategory, "handle": users1[index].handle, "createdAt": users1[index].createdAt, "price": users1[index].price, "available": users1[index].available
          })

        }
        console.log(adminProduct)

        this.dataSource = new MatTableDataSource(adminProduct);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
      , error => {
        this.alertService.error("Encounters some error reach developers")
        users1 = []
      }
    )

    // Assign the data to the data source for the table to render

  }

  ngAfterViewInit() {

  }

  displayedColumns = ['sno', 'name', 'category', 'price', 'available', 'createdAt'];
  dataSource: MatTableDataSource<AdminProduct>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addbut(title) {
  }
  openDialog(title, id): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: title, id: id }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed ' + result);
      this.router.navigateByUrl("/admin/productedit/" + result)
    });
  }
  editbut() {
    window.alert("editbutton");
  }


}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // ngOnInit(): void {
  // }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // resultsLength = 0;
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  //   displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  //   exampleDatabase: ExampleHttpDatabase | null;
  //   data

  //   resultsLength = 0;
  //   isLoadingResults = true;
  //   isRateLimitReached = false;

  //   @ViewChild(MatPaginator) paginator: MatPaginator;
  //   @ViewChild(MatSort) sort: MatSort;

  //   constructor(private _httpClient: HttpClient) { }

  //   ngAfterViewInit() {
  //     this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

  //     // If the user changes the sort order, reset back to the first page.
  //     this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

  //     merge(this.sort.sortChange, this.paginator.page)
  //       .pipe(
  //         startWith({}),
  //         switchMap(() => {
  //           this.isLoadingResults = true;
  //           return this.exampleDatabase!.getRepoIssues(
  //             this.sort.active, this.sort.direction, this.paginator.pageIndex);
  //         }),
  //         map(data => {
  //           // Flip flag to show that loading has finished.
  //           this.isLoadingResults = false;
  //           this.isRateLimitReached = false;
  //           this.resultsLength = data.total_count;

  //           return data.items;
  //         }),
  //         catchError(() => {
  //           this.isLoadingResults = false;
  //           // Catch if the GitHub API has reached its rate limit. Return empty data.
  //           this.isRateLimitReached = true;
  //           return null;
  //         })
  //       ).subscribe(data => this.data = data);
  //   }
  // }

  // export interface GithubApi {
  //   items: GithubIssue[];
  //   total_count: number;
  // }

  // export interface GithubIssue {
  //   created_at: string;
  //   number: string;
  //   state: string;
  //   title: string;
  // }

  // /** An example database that the data source uses to retrieve data for the table. */
  // export class ExampleHttpDatabase {
  //   constructor(private _httpClient: HttpClient) { }

  //   getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
  //     const href = 'https://api.github.com/search/issues';
  //     const requestUrl =
  //       `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

  //     return this._httpClient.get<GithubApi>(requestUrl);
  //   }


