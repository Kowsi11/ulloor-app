import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
import { Properties, sizePrice } from '@app/_models/product/Properties';
import { AlertService } from '@app/_services/alert.service';
import { ProductResponse } from '@app/_models/newProduct/ProductResponse';
import { SubProducts } from '@app/_models/newProduct/SubProducts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductToUse } from '@app/_models/newProduct/productToUse';
import { CartService } from '@app/_services/cart.service';
import { CartProduct } from '@app/_models/newProduct/CartProduct';



@Component({

    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: ProductToUse[] = []
    form: FormGroup;

    orders = [{ id: 1, size: 'S' },
    { id: 2, size: 'M' },
    { id: 3, size: 'L' },
    { id: 4, size: 'XL' }];
    sizePriceVarients = {

    }
    productsResponse: ProductResponse[] = []
    config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.products.length
    };

    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = true;
    public labels: any = {
        previousLabel: '<--',
        nextLabel: '-->',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };
    constructor(private route: ActivatedRoute, private productService: ProductService,
        private alertService: AlertService, private formBuilder: FormBuilder, private cartService: CartService) {
        this.route.params.subscribe(parms => this.category = parms.category);

        this.form = this.formBuilder.group({
            orders: ['']
        });
        console.log(this.category);
        this.getProducts()
        //Create dummy data
        //  for (var i = 0; i < this.collection.count; i++) {
        //   this.collection.data.push(
        //     {
        //       id: i + 1,
        //       value: "items number " + (i + 1)
        //     }
        //   );
        // }

        this.config = {
            itemsPerPage: 12,
            currentPage: 1,
            totalItems: this.products.length
        };

    }


    onPageChange(event) {
        console.log(event);
        this.config.currentPage = event;
    }

    public sizeCalculation(varients: SubProducts[]): any[] {

        let sizePriceIdList: any[] = []


        varients.forEach(element => {
            sizePriceIdList.push({ id: element.id, size: element.option1 })
        });
        console.log(sizePriceIdList)
        return sizePriceIdList;
    }

    plus() {
        console.log("plus")
    }
    minus() {
        console.log("minus")
    }
    private category: any;
    size: string = null;
    quantity: number = 1;
    onSizeChange(value, priceVaries): string {
        this.size = value;
        console.log(this.size)
        return this.size;
    }
    addToCart(title: string, varientId: string, quantity: Number) {
        this.cartService.addProductToCart(title, varientId, quantity)
    }
    varientPrice(id, priceVaries) {

    }
    onQuantityChange(value) {
        this.quantity = value;
    }

    counts: any[] = [1, 2, 3, 4]
    ngOnInit() {
        // an example array of 150 items to be paged

    }



    getProducts() {
        // this.productService.getProductsByCategoryId(this.category).pipe(first()).subscribe(
        //     response => {
        //         if (response.status == "SUCCESS") {
        //             this.products = response.data
        //             console.log(this.products)
        //         }
        //     }
        //     , error => {

        //         this.alertService.error(error.data.errorMessage)
        //         console.log(error)
        //     }
        // );

        this.productsResponse = [{
            id: "5f0c430ef0f3f0768b7a2428", title: "Iron Man T-Shirt", handle: "iron-man-t-shirt", "description": "Will be good to wear", "publishedAt": "2020-07-13T16:48:38.180", "createdAt": "2020-07-13T16:48:38.180", "vendor": "Ulloor Merchandise", "type": "T-shirt", "selectedVariant": null, "tags": ["tshirt", "super", "good"], "price": 599.0, "priceMin": 599.0, "priceMax": null,
            "available": true,
            "priceVaries": false,
            "compareAtPriceMin": 599.0,
            "compareAtPriceMax": 599.0,
            "compareAtPriceVaries": false,
            "variants": [
                {
                    "id": "5f0c430ef0f3f0768b7a2423",
                    "title": "S",
                    "sku": null,
                    "option1": "S",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": false,
                    "name": "Iron Man T-Shirt - S",
                    "publicTitle": "S",
                    "options": [
                        "S"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 0,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c430ef0f3f0768b7a2424",
                    "title": "L",
                    "sku": null,
                    "option1": "L",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Iron Man T-Shirt - L",
                    "publicTitle": "L",
                    "options": [
                        "L"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c430ef0f3f0768b7a2425",
                    "title": "M",
                    "sku": null,
                    "option1": "M",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Iron Man T-Shirt - M",
                    "publicTitle": "M",
                    "options": [
                        "M"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c430ef0f3f0768b7a2426",
                    "title": "XL",
                    "sku": null,
                    "option1": "XL",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Iron Man T-Shirt - XL",
                    "publicTitle": "XL",
                    "options": [
                        "XL"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c430ef0f3f0768b7a2427",
                    "title": "XXL",
                    "sku": null,
                    "option1": "XXL",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Iron Man T-Shirt - XXL",
                    "publicTitle": "XXL",
                    "options": [
                        "XXL"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 50,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                }
            ],
            "images": null,
            "featuredImage": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg",
            "options": [
                "SIZE"
            ],
            "media": [
                {
                    "id": null,
                    "alt": "Iron Man T-Shirt - image-3",
                    "position": 3,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                },
                {
                    "id": null,
                    "alt": "Iron Man T-Shirt - image-2",
                    "position": 2,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image3.jpg"
                },
                {
                    "id": null,
                    "alt": "Iron Man T-Shirt - image-1",
                    "position": 1,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                },
                {
                    "id": null,
                    "alt": "Iron Man T-Shirt - image-4",
                    "position": 4,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                }
            ],
            "content": "Famous T-shirt"
        },
        {
            "id": "5f0c4343f0f3f0768b7a242e",
            "title": "Hulk Man T-Shirt",
            "handle": "hulk-man-t-shirt",
            "description": "Will be good to wear",
            "publishedAt": "2020-07-13T16:49:31.454",
            "createdAt": "2020-07-13T16:49:31.454",
            "vendor": "Ulloor Merchandise",
            "type": "T-shirt",
            "selectedVariant": null,
            "tags": [
                "tshirt",
                "super",
                "good"
            ],
            "price": 599.0,
            "priceMin": 599.0,
            "priceMax": null,
            "available": true,
            "priceVaries": true,
            "compareAtPriceMin": 599.0,
            "compareAtPriceMax": 599.0,
            "compareAtPriceVaries": false,
            "variants": [
                {
                    "id": "5f0c4343f0f3f0768b7a2429",
                    "title": "S",
                    "sku": null,
                    "option1": "S",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": false,
                    "name": "Hulk Man T-Shirt - S",
                    "publicTitle": "S",
                    "options": [
                        "S"
                    ],
                    "price": 199.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 0,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c4343f0f3f0768b7a242a",
                    "title": "L",
                    "sku": null,
                    "option1": "L",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Hulk Man T-Shirt - L",
                    "publicTitle": "L",
                    "options": [
                        "L"
                    ],
                    "price": 299.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c4343f0f3f0768b7a242b",
                    "title": "M",
                    "sku": null,
                    "option1": "M",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Hulk Man T-Shirt - M",
                    "publicTitle": "M",
                    "options": [
                        "M"
                    ],
                    "price": 399.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c4343f0f3f0768b7a242c",
                    "title": "XL",
                    "sku": null,
                    "option1": "XL",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Hulk Man T-Shirt - XL",
                    "publicTitle": "XL",
                    "options": [
                        "XL"
                    ],
                    "price": 499.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 100,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                },
                {
                    "id": "5f0c4343f0f3f0768b7a242d",
                    "title": "XXL",
                    "sku": null,
                    "option1": "XXL",
                    "option2": null,
                    "option3": null,
                    "requiresShipping": true,
                    "taxable": true,
                    "available": true,
                    "name": "Hulk Man T-Shirt - XXL",
                    "publicTitle": "XXL",
                    "options": [
                        "XXL"
                    ],
                    "price": 599.0,
                    "weight": 240.0,
                    "compareAtPrice": 599.0,
                    "inventoryQuantity": 50,
                    "featuredImage": null,
                    "inventoryManagement": "AskTech",
                    "varientIds": null,
                    "barcode": null
                }
            ],
            "images": null,
            "featuredImage": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg",
            "options": [
                "SIZE"
            ],
            "media": [
                {
                    "id": null,
                    "alt": "Hulk Man T-Shirt - image-1",
                    "position": 1,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                },
                {
                    "id": null,
                    "alt": "Hulk Man T-Shirt - image-2",
                    "position": 2,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image3.jpg"
                },
                {
                    "id": null,
                    "alt": "Hulk Man T-Shirt - image-3",
                    "position": 3,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                },
                {
                    "id": null,
                    "alt": "Hulk Man T-Shirt - image-4",
                    "position": 4,
                    "previewImage": null,
                    "aspectRatio": "",
                    "height": 750,
                    "width": 1061,
                    "media_type": "image",
                    "src": "http://localhost:8080/image/ullor-collections-hollywood-image4.jpg"
                }
            ],
            "content": "Famous T-shirt"
            
        }];

        this.products = this.productService.convertProductResponse(this.productsResponse, this.productService)
    }


}
