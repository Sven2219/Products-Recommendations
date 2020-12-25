import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ISmartphone } from '../helpers/interfaces';
import Product from './Product';


interface IProps {
    products: ISmartphone[]
}
const ProductsList = ({ products }: IProps) => {
    const renderItem = (product: ISmartphone) => {
        return <Product product={product} />
    }
    return (
        <FlatList
            data={products}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item: product }: { item: ISmartphone }) => renderItem(product)}
        />
    )
}

export default ProductsList;