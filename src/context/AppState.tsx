import { createContext } from 'react';
import { IProduct } from '../helpers/interfaces';
interface IContextProps {
    shoppingCart: IProduct[];
}
export const AppState = createContext({} as IContextProps);