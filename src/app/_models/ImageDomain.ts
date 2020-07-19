export class ImageDomain {
    category;
    subCategory;
    productName;
    images: any[];

    constructor(category: string, subCategory: string, productName: string, images: any[]) {
        this.category = category
        this.subCategory = subCategory
        this.productName = productName
        this.images = images
    }
}