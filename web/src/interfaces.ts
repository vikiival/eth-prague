type id = string;

export interface Publication {
    id: string;
    name: string;
    description?: string;
    image?: string;
    articles?: id[];
    price: number
}

export interface Article {
    id: id;

}