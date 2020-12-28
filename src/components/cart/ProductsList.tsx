import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    products: IProduct[];
}

const ProductsList = ({ products }: IProps): JSX.Element => {
    const renderItem = (item: IProduct,index:number): JSX.Element => {
        return <Product item={item} index={index}/>
    }
    return (
        <View style={{ height: "75%" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                windowSize={2}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item,index }: { item: IProduct,index:number }) => renderItem(item,index)}
            />
        </View>)
}


export default ProductsList;