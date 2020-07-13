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
    size:string;
    attributes:Attributes[];
	available:boolean;
	price: DoubleRange;
	quantity:number;
	
}
class Attributes{
    name:string;
	value:string;
}