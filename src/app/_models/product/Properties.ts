import { Attributes } from './Attribute';

export class Properties{
    attributes:Attributes[];
	available:boolean;
	price: DoubleRange;
	count:number;
	
}

export class sizePrice{
	size:string;
	price:DoubleRange;
}