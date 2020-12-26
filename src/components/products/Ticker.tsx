import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import { TICKER_HEIGHT, width } from '../../helpers/constants';
import { IProduct } from '../../helpers/interfaces';
interface IProps {
    scrollX: Animated.Value;
    product: IProduct[];
}
const Ticker = ({ scrollX, product }: IProps) => {
    const translateY = scrollX.interpolate({
        inputRange: [-width, 0, width],
        outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
    })
    return (<View style={styles.tickerContainer}>
        {product.map(el => {
            return <Animated.Text key={el.p_id} style={[styles.tickerStyle, { transform: [{ translateY }] }]}>{el.p_name}</Animated.Text>
        })}
    </View>)
}
const styles = StyleSheet.create({
    tickerContainer: {
        top: 20,
        left: 20,
        width,
        height: TICKER_HEIGHT,
        overflow: "hidden",
        position: 'absolute'
    },
    tickerStyle: {
        fontSize: 24,
        fontWeight: "bold"
    }
})
export default Ticker;