import { Properties } from './Properties';
import { Review } from './Review';

export class Product{
    
	id:string;
	subCategoryId:string;
	brand:string;
	name:string;
	description:string;
	createdDate:string;
	price:DoubleRange;
	discount:number;
	available:boolean;
    tag:string[];
	properties:Properties[]; 
	reviews:Review[];
}