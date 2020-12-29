import { IProduct } from "../helpers/interfaces";

export interface IState {
    category: string;
    products: IProduct[];
    cartModal: boolean;
}

export type setCategory = {
    readonly type: "setCategory";
    readonly payload: string;
}
export type setProducts = {
    readonly type: "setProducts";
    readonly payload: IProduct[];
}
export type setCartModal = {
    readonly type: "setCartModal";
    readonly payload: boolean;
}
export type Actions = setCategory | setProducts | setCartModal;

export const reducer = (state: IState, actions: Actions) => {
    switch (actions.type) {
        case "setCategory":
            return { ...state, category: actions.payload };
        case "setProducts":
            return { ...state, products: actions.payload };
        case "setCartModal":
            return { ...state, cartModal: actions.payload };
        default:
            return state;
    }
}