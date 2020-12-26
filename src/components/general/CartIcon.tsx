import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON_SIZE } from '../../helpers/constants';

interface IProps {
    onPress: () => void;
}

const CartIcon = ({ onPress }: IProps) => {
    return (
        <View style={styles.cartContainer}>
            <Ionicons name="cart-outline" size={ICON_SIZE} onPress={onPress} />
        </View>
    )
}
const styles = StyleSheet.create({
    cartContainer: {
        position: 'absolute',
        top: 15,
        right: 10
    }
})

export default CartIcon;