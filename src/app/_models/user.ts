import { address } from './address';

export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
	gender: string;
	email: string;
	phoneNumber: number;
	verified: boolean;
    address: address[];
    

}