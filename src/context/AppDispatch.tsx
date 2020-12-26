import { createContext } from 'react';
import { IProduct } from '../helpers/interfaces';

interface IContextProps {
    setShoppingCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export const AppDispatch = createContext({} as IContextProps);