import React, { useRef } from 'react';
import { Animated, View } from 'react-native';
import { IProduct } from '../../helpers/interfaces';
import Pagination from './Pagination';
import Product from './Product';
import Ticker from './Ticker';

interface IProps {
    products: IProduct[]
}

const ProductsList = ({ products }: IProps): JSX.Element => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <Animated.FlatList
                horizontal
                data={products}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                pagingEnabled
                windowSize={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item: product, index }) => <Product product={product} scrollX={scrollX} index={index} />}
            />
            <Pagination scrollX={scrollX} products={products} />
            <Ticker scrollX={scrollX} products={products} />
        </View>
    )
}

export default ProductsList;