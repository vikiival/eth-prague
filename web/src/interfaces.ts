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
    id: string;
    title: string;
    publicationId: string;
    summary: string;
    image: string;
    author: string;
    authorImage: string;
    content: string;
    publishDate: string;
}
