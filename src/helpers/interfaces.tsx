export interface IProduct {
    p_id: number;
    p_name: string;
    p_price: number;
    p_image: string;
    p_description: string;
    p_category: string;
}
export interface ICategory {
    id: number;
    category: string;
}
export interface IRoute {
    params: { product: IProduct }
}