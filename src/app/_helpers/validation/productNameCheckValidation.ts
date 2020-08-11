import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';

export function titleValidator(productService: ProductService): ValidatorFn {
    //let productNames = ["hi", "bye"]
    let productNames = null
    productService.getProductNames().pipe(first()).subscribe(
        response => {
            if (response.status == "SUCCESS") {
                productNames = response.data

            }
        }, error => {

            this.alertService.error(error)
            this.productNames = null
        }
    );
    return (titleValue: AbstractControl): { [key: string]: boolean } | null => {

        if (productNames != undefined && productNames != null) {
            if (productNames.some(e => e == titleValue.value)) {
                return { 'titleValidator': true };
            }
            // productNames.forEach(element => {
            //     console.log(titleValue.value)
            //     console.log(element)
            //     console.log(titleValue.value == element)

            //     if (element == titleValue.value) {
            //         console.log("lgic com")
            //         return { 'titleValidator': true };
            //     }
            // });
        }

        // if (titleValue.value.trim() == "ram") {
        //     return { 'titleValidator': true };
        // }
        return null

    }



    // let productNames = this.productService.getNames()
    // if (productNames != null) {

    //   productNames.forEach(element => {
    //     if (element == titleValue.value as string) {
    //       return { titleValidator: true };
    //     } else {
    //       return null
    //     }
    //   });
    // } else {
    //   return null
    // }

}