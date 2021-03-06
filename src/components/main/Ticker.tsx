import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { TICKER_HEIGHT, width } from '../../helpers/constants';
import { IProduct } from '../../helpers/interfaces';
interface IProps {
    scrollX: Animated.Value;
    products: IProduct[];
}
const Ticker = ({ scrollX, products }: IProps): JSX.Element => {
    const translateY = scrollX.interpolate({
        inputRange: [-width, 0, width],
        outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
    })
    return (<View style={styles.tickerContainer}>
        {products.map(product => {
            return (
                <Animated.Text
                    key={product.p_id}
                    style={[styles.tickerStyle, { transform: [{ translateY }] }]}>
                    {product.p_name}
                </Animated.Text>
            )
        })}
    </View>)
}
const styles = StyleSheet.create({
    tickerContainer: {
        top: 20,
        width,
        left: 20,
        height: TICKER_HEIGHT,
        overflow: "hidden",
        position: 'absolute',
    },
    tickerStyle: {
        fontSize: 24,
        fontWeight: "bold",
    }
})
export default Ticker;