import React, { useContext, useEffect, useReducer } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import YellowButton from '../components/general/YellowButton';
import Icon from '../components/general/Icon';
import { AppDispatch } from '../context/AppDispatch';
import { ICON_SPACE, IMAGE_SIZE } from '../helpers/constants';
import ProductsList from '../components/details/ProductsList';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import Cart from './Cart';
import { Actions, IState, reducer } from '../reducers/details';

const animation = {
    0: { translateY: 100, opacity: 0 },
    1: { translateY: 0, opacity: 1 }
}

const Details = (props: any): JSX.Element => {
    const { product } = props.route.params;
    const { setShoppingCart } = useContext(AppDispatch);
    const [state, dispatch] = useReducer<React.Reducer<IState, Actions>>(reducer, { products: [], cartModal: false, additionalProductsTitle: 'Users also buyed' })

    useEffect(() => {
        setProducts();
    }, [state.cartModal])


    const addToCart = (): void => {
        setShoppingCart((previouseState) => {
            return [...previouseState, product]
        })
    }
    const getCategory = (): string => {
        if (product.p_category.includes('smartphone')) {
            return 'smartphoneEquipment';
        }
        else if (product.p_category.includes('computer')) {
            return 'computerEquipment';
        }
        else {
            return 'sportEquipment';
        }
    }
    const getInterestingProducts = async () => {
        try {
            const category = getCategory();
            const result = await axios.get(`https://recommendation1.azurewebsites.net/interestingProducts/${product.p_id}/${category}/${product.p_price}`);
            return result.data
        } catch (error) {
            console.log(error);
        }
    }
    const getTogetherBoughtProducts = async () => {
        try {
            const result = await axios.get(`https://recommendation1.azurewebsites.net/purchasedProducts/${product.p_id}/${product.p_name}/${product.p_price}`);
            return result.data;
        } catch (error) {
            console.log(error)
        }
    }

    const setProducts = async (): Promise<void> => {
        try {
            const buyedTogethher = await getTogetherBoughtProducts();
            if (buyedTogethher.length === 0) {
                const interestingProducts = await getInterestingProducts();
                dispatch({ type: "setProducts", products: interestingProducts, additionalProductsTitle: 'You could be interested in...' })
            }
            else {
                dispatch({ type: "setProducts", products: buyedTogethher, additionalProductsTitle: 'Users also buyed...' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const exitScreen = (): void => {
        dispatch({ type: "setProducts", products: [], additionalProductsTitle: '' });
        props.navigation.navigate('Main');
    }
    return (
        <View style={styles.mainContainer} >
            <Icon onPress={exitScreen} left={ICON_SPACE} name="arrow-back" />
            <Icon onPress={() => dispatch({ type: "setCartModal", payload: true })} right={ICON_SPACE} name="cart-outline" />
            <View style={styles.imageContainer} >
                <SharedElement id={`product.${product.p_id}.photo`} style={styles.sharedElement} collapsable={false}>
                    <Image source={{ uri: product.p_image }} style={styles.imageStyle} />
                </SharedElement>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{product.p_price} Kn</Text>
            </View>
            <Animatable.View animation={animation} delay={150} useNativeDriver duration={100} style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{product.p_description}</Text>
            </Animatable.View>

            <View style={styles.productsPosition}>
                {state.products !== undefined && state.products.length > 0 && <Animatable.Text
                    animation={"fadeIn"}
                    delay={100}
                    useNativeDriver
                    duration={100}
                    style={styles.additionalProductsTitle}>
                    {state.additionalProductsTitle}
                </Animatable.Text>}
                <ProductsList products={state.products} />
            </View>
            <YellowButton onPress={addToCart} title={"Add to cart"} />
            {state.cartModal && <Cart onPress={() => dispatch({ type: "setCartModal", payload: false })} />}
        </View >
    )
}
Details.sharedElements = (route: any) => {
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
        top: 20,
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
        marginLeft: 10,
        height: 65
    },
    descriptionText: {
        fontSize: 16,
        fontFamily: 'Regular'
    },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    additionalProductsTitle: {
        fontSize: 16,
        fontFamily: 'Medium',
        paddingTop: 10,
        paddingLeft: 10
    },
    productsPosition: {
        position: 'absolute',
        bottom: 80
    }
})
export default Details;