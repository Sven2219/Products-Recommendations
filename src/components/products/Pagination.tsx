import React from 'react';
import { Animated, StyleSheet, View } from 'react-native'
import { DOT_SIZE, width } from '../../helpers/constants';
import { IProduct } from '../../helpers/interfaces';

interface IProps {
    products: IProduct[];
    scrollX: Animated.Value;
}

const Pagination = ({ products, scrollX }: IProps) => {
    const inputRange = [-width, 0, width];
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-DOT_SIZE, 0, DOT_SIZE],
    })
    return (
        <View style={styles.pagination}>
            <Animated.View style={[styles.paginationIndicator, { transform: [{ translateX }] }]} />
            {products.map((product) => {
                return (
                    <View key={product.p_id} style={[styles.paginationDotContainer]}>
                        <View style={styles.paginationDot} />
                    </View>
                )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    pagination: {
        position: 'absolute',
        right: 20,
        bottom: 150,
        flexDirection: 'row',
        height: DOT_SIZE
    },
    paginationDot: {
        width: DOT_SIZE * 0.3,
        height: DOT_SIZE * 0.3,
        borderRadius: DOT_SIZE * 0.15,
        backgroundColor: '#000'
    },
    paginationDotContainer: {
        width: DOT_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        borderWidth: 2,
        position: 'absolute',
        left: 0,
        borderColor: "rgba(178, 34, 34,0.6)"
    }
})
export default Pagination;