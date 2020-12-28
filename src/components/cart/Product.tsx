import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IProduct } from '../../helpers/interfaces';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CART_IMAGE_SIZE, CART_PRODUCT_CONTAINER_HEIGHT, CART_PRODUCT_CONTAINER_WIDTH, DELETE_ICON_SIZE } from '../../helpers/constants';
import { AppState } from '../../context/AppState';
import { AppDispatch } from '../../context/AppDispatch';
interface IProps {
    item: IProduct;
    index: number;
}

const Product = ({ item, index }: IProps): JSX.Element => {
    const { shoppingCart } = useContext(AppState);
    const { setShoppingCart } = useContext(AppDispatch);
    const deleteItem = (): void => {
        const cart = shoppingCart.filter((el, ind) => index !== ind);
        setShoppingCart(cart);
    }
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.itemContainer, styles.shadow]}>
                <View style={styles.imageTextContainer}>
                    <Image source={{ uri: item.p_image }} style={styles.imageStyle} />
                    <View>
                        <Text style={styles.name}>{item.p_name}</Text>
                        <Text style={styles.price}>Price: {item.p_price}kn</Text>
                    </View>
                </View>
                <AntDesign name="delete" size={DELETE_ICON_SIZE} style={styles.iconStyle} onPress={deleteItem} />
            </View>
        </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    itemContainer: {
        width: CART_PRODUCT_CONTAINER_WIDTH,
        height: CART_PRODUCT_CONTAINER_HEIGHT,
        alignItems: 'center',
        borderWidth: 0.001,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor:'#fff',
        justifyContent: 'space-between'
    },
    imageTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        width: CART_IMAGE_SIZE,
        height: CART_IMAGE_SIZE,
        resizeMode: 'contain'
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
    name: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    price: {
        fontSize: 16,
        fontFamily: 'Medium'
    },
    iconStyle: {
        marginRight: 20
    }
})

export default React.memo(Product, (prevProps, currentProps) => {
    return prevProps.item == currentProps.item;
});