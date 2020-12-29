import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { YELLOW_BUTTON_HEIGHT, YELLOW_BUTTON_WIDTH } from '../../helpers/constants';

interface IProps {
    onPress: () => void | Promise<void>;
    title: string;
}
//Confirm and Add to cart Button!
const YellowButton = ({ onPress, title }: IProps): JSX.Element => {
    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.addToCartText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        width: YELLOW_BUTTON_WIDTH,
        height: YELLOW_BUTTON_HEIGHT,
        borderRadius: YELLOW_BUTTON_HEIGHT/2,
        backgroundColor: "rgba(218, 165, 32,0.8)",
        position: 'absolute',
        bottom: YELLOW_BUTTON_HEIGHT/2-5,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToCartText: {
        fontFamily: 'Bold',
        fontSize: 18
    },

})

export default YellowButton;