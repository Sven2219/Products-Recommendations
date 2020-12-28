import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ShopTitle = (): JSX.Element => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                SVEN SHOP
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        top: 20
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Bold'
    },
})

export default ShopTitle;