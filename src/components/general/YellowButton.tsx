import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

interface IProps {
    onPress: () => void | Promise<void>;
    title: string;
}

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
        width: 220,
        height: 50,
        borderRadius: 25,
        backgroundColor: "rgba(218, 165, 32,0.8)",
        position: 'absolute',
        bottom: 20,
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