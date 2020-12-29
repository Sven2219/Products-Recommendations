import { IProduct } from "../helpers/interfaces";

export interface IState {
    cartModal: boolean;
    products: IProduct[];
    additionalProductsTitle: string;
}


export type setCartModal = {
    readonly type: "setCartModal";
    readonly payload: boolean;
}
export type setProducts = {
    readonly type: "setProducts";
    readonly products: IProduct[];
    readonly additionalProductsTitle: string;
}


export type Actions = setCartModal | setProducts;

export const reducer = (state: IState, actions: Actions) => {
    switch (actions.type) {
        case "setCartModal":
            return { ...state, cartModal: actions.payload };
        case "setProducts":
            return { ...state, products: actions.products, additionalProductsTitle: actions.additionalProductsTitle };
        default:
            return state;
    }
}