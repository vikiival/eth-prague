type id = string;

export interface Publication {
    id: string;
    name: string;
    description?: string;
    image?: string;
    articles?: id[];
}