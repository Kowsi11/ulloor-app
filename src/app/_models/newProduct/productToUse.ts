import { ProductResponse } from './ProductResponse';
import { ProductService } from '@app/_services/product.service';

interface ProductToUseI{
    id:string
    title:string
	handle:string;
    description:string
	priceVaries:Boolean;
    price:number
    
	compareAtPrice:number;
	compareAtPriceVaries:Boolean;
	images:string[];
    featuredImage:string;
    selectedVarient:string;
    sizePriceIdList:any[]
}
export class ProductToUse{
    
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
    selectedVarient: string;
    sizePriceIdList: any[];
    constructor(productresponse:ProductResponse, productService: ProductService){
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
        this.sizePriceIdList  = productService.sizeCalculation(productresponse.variants)
    }
    
}  