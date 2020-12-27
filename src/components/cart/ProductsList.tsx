import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    products: IProduct[];
}

const ProductsList = ({ products }: IProps): JSX.Element => {
    const renderItem = (item: IProduct): JSX.Element => {
        return <Product item={item} />
    }
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: { item: IProduct }) => renderItem(item)}
            />
        </View>)
}


export default ProductsList;