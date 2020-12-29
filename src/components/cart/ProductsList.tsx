import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    products: IProduct[];
}

const ProductsList = ({ products }: IProps): JSX.Element => {
    const renderItem = (item: IProduct, index: number): JSX.Element => {
        return <Product item={item} index={index} />
    }
    return (
        <View style={styles.mainConainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                windowSize={2}
                data={products}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }: { item: IProduct, index: number }) => renderItem(item, index)}
            />
        </View>)
}
const styles = StyleSheet.create({
    mainConainer: {
        height: "75%",
        marginTop:10
    }
})


export default ProductsList;