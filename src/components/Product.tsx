import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DELIVERY_TRUCK_SIZE, PRODUCT_CONTAINER_HEIGHT, PRODUCT_CONTAINER_WIDTH, PRODUCT_IMAGE_WIDTH } from '../helpers/constants';
import { ISmartphone } from '../helpers/interfaces';
import Specification from './Specification';
interface IProps {
    product: ISmartphone
}

const Product = ({ product }: IProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.deliveryTruckContainer}>
                <Image source={require('../images/deliveryTruck.png')} style={styles.deliveryTruckImage} />
            </View>
            <View style={styles.productContainer}>
                <Image source={{ uri: product.s_image }} style={{ ...StyleSheet.absoluteFillObject }} />
            </View>
            <View style={styles.informationContainer}>
                <View style={styles.lineContainer} />
                <Specification label={"Name: "} value={product.s_name} />
                <Text style={styles.normalPriceText}>Normal price: {product.s_price} kn </Text>
                <Specification label={"Webshop price: "} value={String(product.s_webshop_price) + " kn"} />
            </View>
        </View >)
}
const styles = StyleSheet.create({

    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: PRODUCT_CONTAINER_WIDTH,
        height: PRODUCT_CONTAINER_HEIGHT,
        borderWidth: 0.7,
        borderRadius: 7
    },
    deliveryTruckContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        left: 10
    },
    deliveryTruckImage: {
        width: DELIVERY_TRUCK_SIZE,
        height: DELIVERY_TRUCK_SIZE
    },
    productContainer: {
        width: PRODUCT_IMAGE_WIDTH,
        height: PRODUCT_CONTAINER_HEIGHT - 20,
        marginLeft: 30,
        borderRightWidth: 0.5
    },
    informationContainer: {
        marginLeft: 20,
        height: PRODUCT_CONTAINER_HEIGHT,
        justifyContent: 'space-evenly'
    },
    labelText: {
        fontWeight: 'bold',
    },
    lineContainer: {
        width: PRODUCT_CONTAINER_WIDTH - PRODUCT_IMAGE_WIDTH - 90,
        borderWidth: 0.8,
        backgroundColor: '#696969',
        position: 'absolute',
        top: PRODUCT_CONTAINER_HEIGHT / 2
    },
    normalPriceText: {
        color: '#696969'
    }
})
export default Product;