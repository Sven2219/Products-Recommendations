import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SharedElement } from 'react-navigation-shared-element';
import YellowButton from '../components/general/YellowButton';
import Icon from '../components/general/Icon';
import { AppDispatch } from '../context/AppDispatch';
import { AppState } from '../context/AppState';
import { ICON_SIZE, ICON_SPACE, IMAGE_SIZE } from '../helpers/constants';
import { IProduct } from '../helpers/interfaces';


const Details = (props: any): JSX.Element => {
    const { product } = props.route.params;
    const { setShoppingCart } = useContext(AppDispatch);
    const { shoppingCart } = useContext(AppState);
    const [togetherBought, setTogetherBought] = useState<IProduct[]>([]);
    const addToCart = (): void => {
        setShoppingCart((previouseState) => {
            return [...previouseState, product]
        })
    }

    return (
        <View style={styles.mainContainer}>
            <Icon onPress={() => props.navigation.navigate('Main')} left={ICON_SPACE} name="arrow-back" />
            <Icon onPress={() => props.navigation.navigate('Cart')} right={ICON_SPACE} name="cart-outline" />
            <View style={styles.imageContainer}>
                <SharedElement id={`product.${product.p_id}.photo`} style={styles.sharedElement}>
                    <Image source={{ uri: product.p_image }} style={styles.imageStyle}  />
                </SharedElement>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{product.p_price} Kn</Text>
            </View>
            <YellowButton onPress={addToCart} title={"Add to cart"}/>
        </View>
    )
}
Details.sharedElements = (route: any, otherRoute: any, showing: any) => {
    const { product } = route.params;
    return [
        { id: `product.${product.p_id}.photo` },
    ]
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
    },
    priceContainer: {
        position: 'absolute',
        top: IMAGE_SIZE * 0.7,
        right: 20
    },
    priceText: {
        fontSize: 23,
        fontFamily: 'Bold',
        textAlign: 'center'
    },
    sharedElement: {
        width: IMAGE_SIZE * 0.69,
        height: IMAGE_SIZE * 0.73,

    },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    tickerStyle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    heartContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 20,
        left: 10,
        borderWidth: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heartShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
export default Details;