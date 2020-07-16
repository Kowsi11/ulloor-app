import { CartProduct } from '../newProduct/CartProduct';
import { ThrowStmt } from '@angular/compiler';

export class Cart{
	id:string;

	userId:string;
	
	createdDate:string;
	
	products:CartProduct[];
	
	totalAmount:number;

	createCart(id:string,userId,createdDate,products,totalAmount):Cart{
		let cart:Cart
		cart.id = id
		cart.userId = userId
		cart.createdDate = createdDate
		cart.products = products
		cart.totalAmount = totalAmount
		return cart
	}
}