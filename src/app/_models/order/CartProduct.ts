export class Product{
    
	id:string;
	subCategoryId:string;
	brand:string;
	name:string;
	description:string;
	createdDate:string;
	images:string[];
	price:DoubleRange;
	discount:number;
	available:boolean;
    tag:string[];
	properties:Properties;
    
}

class Properties{
    attributes:Attributes;
	available:boolean;
	price: DoubleRange;
	count:number;
	
}
class Attributes{
    name:string;
	value:string;
}