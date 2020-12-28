import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { DETAILS_IMAGE_SIZE } from '../../helpers/constants';
interface IProps {
    product: any;

}

const Product = ({ product }: IProps): JSX.Element => {
    return (
        <Animatable.View style={[styles.mainContainer, styles.shadow]} useNativeDriver animation={"fadeIn"} duration={300} delay={300}>
            <SharedElement id={`product.${product.p_id}.photo`}>
                <Image source={{ uri: product.p_image }} style={styles.imageSize} />
            </SharedElement>
            <Text style={styles.nameText}>{product.p_name}</Text>
            <Text style={styles.priceText}>{product.p_price}kn</Text>
            <TouchableOpacity style={styles.addButtonContainer}>
                <Text style={styles.addButtonText}>Dodaj u košaricu</Text>
            </TouchableOpacity>
        </Animatable.View >)
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 125,
        height: 150,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
        width: 110,
        height: 20,
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