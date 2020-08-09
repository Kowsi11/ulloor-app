import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { ResponseDto } from '@app/_models/ResponseDto';
import { SubProducts } from '@app/_models/newProduct/SubProducts';
import { ProductToUse } from '@app/_models/newProduct/productToUse';
import { ProductResponse } from '@app/_models/newProduct/ProductResponse';
import { CartProduct } from '@app/_models/newProduct/CartProduct';
import { AlertService } from './alert.service';
import { ImageDomain } from '@app/_models/ImageDomain';
import { ProductReq } from '@app/_models/newProduct/ProductRequest';
import { Color } from '@app/_models/Color';
import { Size } from '@app/_models/newProduct/Size';
import { ImageWithPosition } from '@app/_models/newProduct/ImageWithPosition';
import { MatChips } from '@app/admin/admin.component';

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private alertService: AlertService
    ) {

    }
    getProductsByCategoryId(categoryId: string) {
        console.log(`${environment.categoryUrl}/category/${categoryId}/products`)
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/category/${categoryId}/products`);
    }
    getProductById(productId: string) {
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/product/${productId}`);
    }

    getComboProductById(comboId: string) {
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/combo/${comboId}`);
    }
    getCombos() {
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/combos`);

    }
    getProductNames() {
        let productNames: string[] = null
        this.http.get<ResponseDto>(`${environment.categoryUrl}/products/name`).subscribe(

            response => {
                if (response.status === " SUCCESS") {
                    productNames = response.data
                }
            }, error => {

                this.alertService.error(error)
                productNames = null
            }
        );
        return productNames

    }
    getCartProduct(title: string, varientId: string, quantity: Number) {
        let cartProduct: CartProduct = null
        console.log(`${environment.categoryUrl}/product/${title}?varientId=${varientId}&quantity=${quantity}`)
        return this.http.get<ResponseDto>(`${environment.categoryUrl}/product/${title}?varientId=${varientId}&quantity=${quantity}`)


    }
    sizeCalculation(varients: SubProducts[]): any[] {

        let sizePriceIdList: any[] = []
        varients.forEach(element => {
            sizePriceIdList.push({ id: element.id, size: element.option1 })
        });
        return sizePriceIdList;
    }
    convertProductResponse(productResponse: ProductResponse[], productService: ProductService): ProductToUse[] {
        let productoUseList: ProductToUse[] = []
        productResponse.forEach(element => {
            productoUseList.push(new ProductToUse(element, productService))
        });
        return productoUseList
    }


    saveProduct(productRequest) {
        this.http.post<ResponseDto>(`${environment.categoryUrl}/newproduct`, productRequest).subscribe(
            response => {
                console.log(response)
                if (response.status == "SUCCESS") {
                    console.log("Product saved")
                    this.alertService.success("Product saved")
                    this.router.navigate(["/home"])

                }

            }
            , error => {

                this.alertService.error(error)
                console.log(error)

            }
        );
    }

    uploadImage(imageDomain: ImageDomain) {
        let ImageResponse: ImageWithPosition[]
        return this.http.post<ResponseDto>(`${environment.imageUrl}`, imageDomain);
    }
    returnImageResponse(imageResponse: ImageWithPosition[]) {
        return imageResponse
    }

    generateProductResponse(formOutput: any, imageResponse: ImageWithPosition[], category: string, colors: string[], tags: string[]): ProductReq {

        let productRequest: ProductReq = new ProductReq()
        productRequest.title = formOutput.productTitle
        productRequest.description = formOutput.description
        productRequest.subCategoryName = formOutput.subCategoryName
        productRequest.price = formOutput.price
        productRequest.priceVaries = formOutput.priceVaries == null || formOutput.priceVaries == "" ? false : formOutput.priceVaries
        productRequest.compareAtPriceVaries = formOutput.compareAtPriceVaries == null || formOutput.compareAtPriceVaries == "" ? false : formOutput.priceVaries
        productRequest.compareAtPriceMax = formOutput.compareAtPriceMin
        productRequest.compareAtPriceMin = formOutput.compareAtPriceMin
        productRequest.tags = tags
        productRequest.color = colors
        productRequest.imageWithPosition = imageResponse
        if (category === "collections") {
            productRequest.type = "T-Shirt"
            let sizes: Size[] = []
            let Ssize: Size = new Size();
            Ssize.isDefault = false
            Ssize.size = "S"
            Ssize.available = formOutput.size1_available
            Ssize.stockAvailable = formOutput.size1_available == true ? (formOutput.size1_stock_available == null || formOutput.size1_stock_available == "" ? true : formOutput.size1_stock_available) : (formOutput.size1_stock_available == null || formOutput.size1_stock_available == "" ? false : formOutput.size1_stock_available)
            Ssize.quantity = formOutput.size1_quantity
            Ssize.weight = formOutput.size1_weight
            Ssize.prize = formOutput.size1_price

            let Msize: Size = new Size();
            Msize.isDefault = false
            Msize.size = "M"
            Msize.available = formOutput.size2_available
            Msize.stockAvailable = formOutput.size2_available == true ? (formOutput.size2_stock_available == null || formOutput.size2_stock_available == "" ? true : formOutput.size2_stock_available) : (formOutput.size2_stock_available == null || formOutput.size2_stock_available == "" ? false : formOutput.size2_stock_available)
            Msize.quantity = formOutput.size2_quantity
            Msize.weight = formOutput.size2_weight
            Msize.prize = formOutput.size2_price

            let Lsize: Size = new Size();
            Lsize.isDefault = false
            Lsize.size = "L"
            Lsize.available = formOutput.size3_available
            Lsize.stockAvailable = formOutput.size3_available == true ? (formOutput.size3_stock_available == null || formOutput.size3_stock_available == "" ? true : formOutput.size3_stock_available) : (formOutput.size3_stock_available == null || formOutput.size3_stock_available == "" ? false : formOutput.size3_stock_available)
            Lsize.quantity = formOutput.size3_quantity
            Lsize.weight = formOutput.size3_weight
            Lsize.prize = formOutput.size3_price

            let XLsize: Size = new Size();
            XLsize.isDefault = false
            XLsize.size = "XL"
            XLsize.available = formOutput.size4_available
            XLsize.quantity = formOutput.size4_quantity
            XLsize.stockAvailable = formOutput.size4_available == true ? (formOutput.size4_stock_available == null || formOutput.size4_stock_available == "" ? true : formOutput.size4_stock_available) : (formOutput.size4_stock_available == null || formOutput.size4_stock_available == "" ? false : formOutput.size4_stock_available)
            XLsize.weight = formOutput.size4_weight
            XLsize.prize = formOutput.size4_price

            let XXLsize: Size = new Size();
            XXLsize.isDefault = false
            XXLsize.size = "XXL"
            XXLsize.available = formOutput.size5_available
            XXLsize.stockAvailable = formOutput.size5_available == true ? (formOutput.size5_stock_available == null || formOutput.size5_stock_available == "" ? true : formOutput.size5_stock_available) : (formOutput.size5_stock_available == null || formOutput.size5_stock_available == "" ? false : formOutput.size5_stock_available)
            XXLsize.quantity = formOutput.size5_quantity
            XXLsize.weight = formOutput.size5_weight
            XXLsize.prize = formOutput.size5_price

            sizes.push(Ssize)
            sizes.push(Msize)
            sizes.push(Lsize)
            sizes.push(XLsize)
            sizes.push(XXLsize)

            productRequest.size = sizes
        } else if (category === "stationaries") {
            let sizes: Size[] = []
            let A2size: Size = new Size();
            A2size.isDefault = false
            A2size.size = "A2"
            A2size.available = formOutput.size1_available
            A2size.stockAvailable = formOutput.size1_available == true ? (formOutput.size1_stock_available == null || formOutput.size1_stock_available == "" ? true : formOutput.size1_stock_available) : (formOutput.size1_stock_available == null || formOutput.size1_stock_available == "" ? false : formOutput.size1_stock_available)
            A2size.quantity = formOutput.size1_quantity
            A2size.weight = formOutput.size1_weight
            A2size.prize = formOutput.size1_price

            let A3size: Size = new Size();
            A3size.isDefault = false
            A3size.size = "A3"
            A3size.available = formOutput.size2_available
            A3size.stockAvailable = formOutput.size2_available == true ? (formOutput.size2_stock_available == null || formOutput.size2_stock_available == "" ? true : formOutput.size2_stock_available) : (formOutput.size2_stock_available == null || formOutput.size2_stock_available == "" ? false : formOutput.size2_stock_available)
            A3size.quantity = formOutput.size2_quantity
            A3size.weight = formOutput.size2_weight
            A3size.prize = formOutput.size2_price

            let A5size: Size = new Size();
            A5size.isDefault = false
            A5size.size = "A5"
            A5size.available = formOutput.size3_available
            A2size.stockAvailable = formOutput.size3_available == true ? (formOutput.size3_stock_available == null || formOutput.size3_stock_available == "" ? true : formOutput.size3_stock_available) : (formOutput.size3_stock_available == null || formOutput.size3_stock_available == "" ? false : formOutput.size3_stock_available)
            A5size.quantity = formOutput.size3_quantity
            A5size.weight = formOutput.size3_weight
            A5size.prize = formOutput.size3_price

            sizes.push(A2size)
            sizes.push(A3size)
            sizes.push(A5size)

            productRequest.size = sizes
        } else if (category === "accessories") {
            let sizes: Size[] = []
            let default1: Size = new Size();
            default1.isDefault = true
            default1.size = "Default"
            default1.available = formOutput.size1_available == "" ? true : false
            default1.stockAvailable = formOutput.size1_stock_available == "" ? true : false
            default1.quantity = formOutput.size1_quantity
            default1.weight = formOutput.size1_weight
            default1.prize = formOutput.size1_price

            sizes.push(default1)
            productRequest.size = sizes
        }


        return productRequest

    }



}