import { ImageWithPosition } from '../ImageWithPosition';
import { UpdateSubProduct } from './UpdateSubProduct';

export class UpdateProduct {
    id: string
    tags: string[];
    description: string;

    compareAtPriceMax: number;
    compareAtPriceMin: number;
    compareAtPriceVaries: Boolean;

    price: number;
    priceVaries: Boolean;

    available: Boolean;

    imageWithPosition: ImageWithPosition[];

    size: UpdateSubProduct[];
}