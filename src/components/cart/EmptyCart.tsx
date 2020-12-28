import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CART_CONTAINER_HEIGHT, CART_CONTAINER_WIDTH, EMPTY_CART_SIZE } from '../../helpers/constants';

const EmptyCart = (): JSX.Element => {
    return (<View style={styles.mainContainer}>
        <View style={styles.cartContainer}>
            <Ionicons name="md-cart-outline" size={EMPTY_CART_SIZE} />
            <Text style={styles.textStyle}>Your cart is currently empty</Text>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    cartContainer: {
        borderWidth: 0.4,
        width: CART_CONTAINER_WIDTH,
        height: CART_CONTAINER_HEIGHT,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'Bold'
    }
})
export default EmptyCart;