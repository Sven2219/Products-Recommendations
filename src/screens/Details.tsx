import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SharedElement } from 'react-navigation-shared-element';
import Icon from '../components/general/Icon';
import { AppDispatch } from '../context/AppDispatch';
import { AppState } from '../context/AppState';
import { ICON_SIZE, ICON_SPACE, IMAGE_SIZE } from '../helpers/constants';
import { IProduct } from '../helpers/interfaces';


const Details = (props: any) => {
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
            <Icon onPress={() => props.navigation.goBack()} left={ICON_SPACE} name="arrow-back" />
            <Icon onPress={() => props.navigation.navigate('Cart')} right={ICON_SPACE} name="cart-outline" />
            <View style={{justifyContent:'center',alignItems:'center',top:40}}>
                <SharedElement id={`product.${product.p_id}.photo`} style={styles.imageStyle}>
                    <Image source={{ uri: product.p_image }} style={{ ...StyleSheet.absoluteFillObject,resizeMode:'cover' }} resizeMethod="auto"/>
                </SharedElement>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{product.p_price} Kn</Text>
            </View>

            <View style={styles.cartContainer}>
                <TouchableOpacity onPress={addToCart}>
                    <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.heartContainer]}>
                <Ionicons name="heart-outline" size={ICON_SIZE} />
            </View>
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
        backgroundColor:'#fff'
    },
    imageContainer: {
        top: 20,
        alignItems: 'center'
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
    imageStyle: {
        width: IMAGE_SIZE * 0.8,
        height: IMAGE_SIZE * 0.8,
    },
    tickerStyle: {
        fontSize: 24,
        fontWeight: "bold",
    },
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