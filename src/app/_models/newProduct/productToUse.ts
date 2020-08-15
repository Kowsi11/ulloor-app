import { ProductResponse } from './ProductResponse';
import { ProductService } from '@app/_services/product.service';

interface ProductToUseI {
    id: string
    title: string
    handle: string;
    description: string
    priceVaries: Boolean;
    price: number

    compareAtPrice: number;
    compareAtPriceVaries: Boolean;
    images: string[];
    featuredImage: string;
    selectedVarient: string;
    sizePriceIdList: any[]
}
export class SelectedVarient {
    id: string
    price: number
    available: Boolean
}

export class SizePriceList {
    id: string
    size: string
    stockAvailable: Boolean
    price: number
}

export class ProductToUse {

    id: string;
    title: string;
    handle: string;
    description: string;
    priceVaries: Boolean;
    price: number;
    compareAtPrice: number;
    compareAtPriceVaries: Boolean;
    images: string[];
    featuredImage: string;
    selectedVarient: SelectedVarient;
    sizePriceIdList: SizePriceList[];
    constructor(productresponse: ProductResponse, productService: ProductService) {
        this.id = productresponse.id
        this.title = productresponse.title
        this.handle = productresponse.handle
        this.description = productresponse.description
        this.priceVaries = productresponse.priceVaries
        this.price = productresponse.price
        this.compareAtPrice = productresponse.compareAtPriceMax
        this.compareAtPriceVaries = productresponse.compareAtPriceVaries
        this.images = productresponse.images
        this.featuredImage = productresponse.featuredImage
        this.selectedVarient = null
        this.sizePriceIdList = productService.sizeCalculation(productresponse.variants)
        if (productresponse.variants != null && productresponse.variants.length == 1 && productresponse.variants[0].title == "DEFAULT") {
            let selectedVarient = new SelectedVarient()
            selectedVarient.id = productresponse.variants[0].id
            selectedVarient.price = productresponse.variants[0].price
            selectedVarient.available = productresponse.variants[0].stockAvailable
            this.selectedVarient = selectedVarient
        }
    }

}  