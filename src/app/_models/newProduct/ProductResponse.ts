import { Media } from './Media';
import { SubProducts } from './SubProducts';
import { ProductsComponent } from '@app/products/products.component';

export class ProductResponse{
    id:string;
	title:string;
	handle:string;
	description:string;
	publishedAt:string;
	createdAt:string;
	vendor:string;
	type:string;
	tags:string[];
	price:number;
	priceMin:number;
	priceMax:number;
	available:Boolean;
	priceVaries:Boolean;
	compareAtPriceMin:number;
	compareAtPriceMax:number;
	compareAtPriceVaries:Boolean;
	variants:SubProducts[];
	images:string[];
	featuredImage:string;
	options:string[];
	media:Media[];
	content:string;
	selectedVariant:string;
}