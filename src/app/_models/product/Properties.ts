import { Attributes } from './Attribute';

export class Properties{
	size:string;
    attributes:Attributes[];
	available:boolean;
	price: DoubleRange;
	quantity:number;
	
}

export class sizePrice{
	size:string;
	price:DoubleRange;
}