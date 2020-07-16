import { ImageWithPosition } from './ImageWithPosition';
import { Size } from './Size';

export class ProductReq{
    title:string; 
	subCategoryName:string;
	description:string;
	tags:string[];
	price:Boolean;
	priceVaries:Boolean;
	priceMin:DoubleRange;
	priceMax:DoubleRange;
	compareAtPriceMin:DoubleRange;
	compareAtPriceMax:DoubleRange;
	compareAtPriceVaries:Boolean;
	type:string;
	content:String;
	imageWithPosition:ImageWithPosition[];
	color:string[];
	size:Size[];
}