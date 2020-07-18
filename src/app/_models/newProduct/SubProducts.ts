import { Media } from './Media';

export class SubProducts{
    id:string;
	title:string;
	sku:string;
	option1:string;
	option2:string;
	option3:string;
	requiresShipping:Boolean;
	taxable:Boolean;
	available:Boolean;
	name:string;
	publicTitle:string;
	options:string[];
	price:number;
	weight:number;
	compareAtPrice:number;
	inventoryQuantity:number;
	featuredImage:Media;
	inventoryManagement:string;
	varientIds:string[];
	barcode:string;
	
}