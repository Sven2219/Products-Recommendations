import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    products: IProduct[]
    navigation: any
}

const ProductsList = ({ products, navigation }: IProps) => {
    const renderItem = (product: IProduct, index: number) => {
        return (<Product navigation={navigation} product={product} />)
    }
    return (
        <FlatList
            data={products}
            windowSize={2}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item: product, index }) => renderItem(product, index)}
        />)

}


export default ProductsList;