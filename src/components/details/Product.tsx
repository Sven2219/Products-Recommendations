import React, { useContext } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppDispatch } from '../../context/AppDispatch';
import { DETAILS_IMAGE_SIZE, DETAILS_PRODUCT_HEIGHT, DETAILS_PRODUCT_WIDTH } from '../../helpers/constants';
import { IProduct } from '../../helpers/interfaces';
interface IProps {
    product: IProduct;

}

const Product = ({ product }: IProps): JSX.Element => {
    const { setShoppingCart } = useContext(AppDispatch);
    const addToCart = (): void => {
        setShoppingCart((prevState) => {
            return [...prevState, product]
        })
    }
    return (
        <Animatable.View style={[styles.mainContainer, styles.shadow]} useNativeDriver animation={"fadeIn"} duration={200} delay={50}>
            <Image source={{ uri: product.p_image }} style={styles.imageSize} />
            <Text style={styles.nameText}>{product.p_name}</Text>
            <Text style={styles.priceText}>{product.p_price}kn</Text>
            <TouchableOpacity style={styles.addButtonContainer} onPress={addToCart}>
                <Text style={styles.addButtonText}>Add to cart</Text>
            </TouchableOpacity>
        </Animatable.View >)
}

const styles = StyleSheet.create({
    mainContainer: {
        width: DETAILS_PRODUCT_WIDTH,
        height: DETAILS_PRODUCT_HEIGHT,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderWidth:0.001
    },
    shadow: {
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.01,
        shadowRadius: 2,
        elevation: 5,
    },
    imageSize: {
        width: DETAILS_IMAGE_SIZE,
        height: DETAILS_IMAGE_SIZE,
        resizeMode: 'contain'
    },
    nameText: {
        fontSize: 13,
        fontFamily: 'Regular'
    },
    priceText: {
        fontSize: 14,
        fontFamily: 'Bold',
        top: 5
    },
    addButtonContainer: {
        width: DETAILS_PRODUCT_WIDTH*0.85,
        height: 24,
        backgroundColor: "rgba(218, 165, 32,0.8)",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },
    addButtonText: {
        fontSize: 15,
        fontFamily: 'Medium'
    }
})

export default React.memo(Product, (prevProps, currentProps) => {
    return prevProps.product == currentProps.product;
});