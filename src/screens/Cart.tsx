import React from 'react';
import { Text, View } from 'react-native';
import { ICON_SIZE } from '../helpers/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    navigation: any;
}

const Cart = ({ navigation }: IProps) => {
    return (<View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Ionicons name="arrow-back" size={ICON_SIZE} onPress={() => navigation.goBack()} />

    </View>)
}
export default Cart;