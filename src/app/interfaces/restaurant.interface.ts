
export interface Product {
    
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

export interface Restaurantes {
    id?: string;
    name?: string;
    description?: string;
    rating?: number;
    image?: string;
    category?: string;
    deliveryEstimate?: string;
}