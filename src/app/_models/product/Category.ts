import { SubCategory } from './SubCategory';

export class Category {

    id: string;
    name: string;
    imageUrl: string;
    subCategories: SubCategory[];
}

export interface CategoryHandle {
    name: string,
    handle: string
}
export class SubCategoryValue {
    collections: CategoryHandle[] = [{
        name: 'ChennaiMania',
        handle: "chennai-mania"
    },
    {
        name: 'Couple',
        handle: "couple"
    },
    {
        name: 'Friendship',
        handle: "friendship"
    },
    {
        name: 'Hollywood',
        handle: "hollywood"
    },
    {
        name: 'Kollywood',
        handle: "kollywood"
    }
    ]
    accesories: CategoryHandle[] = [{
        name: 'Keychains',
        handle: "keychains"
    },
    {
        name: 'Mobile Case',
        handle: "mobilecase"
    },
    {
        name: 'Mugs',
        handle: "mugs"
    },
    {
        name: 'Pin Badges',
        handle: "pin-badges"
    },
    {
        name: 'Pop Sockets',
        handle: "pop-sockets"
    },
    {
        name: 'Wrist bands',
        handle: "wrist-bands"
    }]
    stationary: CategoryHandle[] = [{
        name: 'A3-Posters',
        handle: "a3-posters"
    },
    {
        name: 'Notepad',
        handle: "notepad"
    },
    {
        name: 'Stickers',
        handle: "stickers"
    }]
    getCollections() {
        return this.collections
    }
    getAccesories() {
        return this.accesories
    }
    getStationary() {
        return this.stationary
    }

}
