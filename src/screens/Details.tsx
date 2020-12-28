import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import YellowButton from '../components/general/YellowButton';
import Icon from '../components/general/Icon';
import { AppDispatch } from '../context/AppDispatch';
import { ICON_SPACE, IMAGE_SIZE } from '../helpers/constants';
import { IProduct } from '../helpers/interfaces';
import BoughtTogether from '../components/details/BoughtTogether';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const Details = (props: any): JSX.Element => {
    const { product } = props.route.params;
    const { setShoppingCart } = useContext(AppDispatch);
    const [boughtTogether, setBoughtTogether] = useState([]);
    useEffect(() => {
        getTogetherBoughtProducts();
    }, [])
    const addToCart = (): void => {
        setShoppingCart((previouseState) => {
            return [...previouseState, product]
        })
    }
    const getTogetherBoughtProducts = async (): Promise<void> => {
        try {
            const result = await axios.get(`http://192.168.0.135:1337/purchasedProducts/${product.p_id}`);
            const data = result.data.filter((el: IProduct) => el.p_id !== product.p_id);
            setBoughtTogether(data);
        } catch (error) {
            console.log(error)
        }
    }
    const animation = {
        0: { translateY: 100, opacity: 0 },
        1: { translateY: 0, opacity: 1 }
    }
    return (
        <View style={styles.mainContainer}>
            <Icon onPress={() => props.navigation.navigate('Main')} left={ICON_SPACE} name="arrow-back" />
            <Icon onPress={() => props.navigation.navigate('Cart')} right={ICON_SPACE} name="cart-outline" />
            <View style={styles.imageContainer}>
                <SharedElement id={`product.${product.p_id}.photo`} style={styles.sharedElement}>
                    <Image source={{ uri: product.p_image }} style={styles.imageStyle} />
                </SharedElement>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{product.p_price} Kn</Text>
            </View>
            <Animatable.View animation={animation} delay={300} useNativeDriver duration={400} style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{product.p_description}</Text>
            </Animatable.View>
            {boughtTogether.length > 0 && < Animatable.Text animation={"fadeIn"} delay={400} useNativeDriver duration={400} style={styles.usersAlsoBuyText}>Korisnici su također kupili...</Animatable.Text>}
            <BoughtTogether boughtTogether={boughtTogether} />
            <YellowButton onPress={addToCart} title={"Add to cart"} />
        </View >
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
    descriptionContainer: {
        marginTop: 45,
        marginLeft: 10
    },
    descriptionText: {
        fontSize: 16,
        fontFamily: 'Regular'
    },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    usersAlsoBuyText: {
        fontSize: 16,
        fontFamily: 'Medium',
        paddingTop: 10,
        paddingLeft: 10
    }
})
export default Details;