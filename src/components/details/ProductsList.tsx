import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    products: IProduct[];
}

const ProductsList = ({ products }: IProps): JSX.Element => {
    const renderItem = (item: IProduct): JSX.Element => {
        return <Product product={item} />
    }
    return (
        <FlatList
            data={products}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: { item: IProduct }) => renderItem(item)}
        />
    )
}

export default ProductsList;