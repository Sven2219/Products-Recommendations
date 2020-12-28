import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICON_SPACE } from '../helpers/constants';
import Icon from '../components/general/Icon';
import axios from 'axios';
import { AppDispatch } from '../context/AppDispatch';
import { AppState } from '../context/AppState';
import { IBrackedCart } from '../helpers/interfaces';
import ProductsList from '../components/cart/ProductsList';
import EmptyCart from '../components/cart/EmptyCart';
interface IProps {
    navigation: any;
}

const Cart = ({ navigation }: IProps): JSX.Element => {
    const { shoppingCart } = useContext(AppState);
    const { setShoppingCart } = useContext(AppDispatch);
    const breakToIdAndCategory = (): IBrackedCart[] => {
        const cart: IBrackedCart[] = [];
        shoppingCart.forEach(item => {
            cart.push({ id: item.p_id, category: item.p_category });
        });
        return cart;
    }
    const saveToDatabase = async (): Promise<void> => {
        try {
            const result = await axios.post('http://192.168.0.135:1337/buyed', {
                shoppingCart: breakToIdAndCategory()
            })
            if (result) {
                setShoppingCart([])
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getProducts = (): JSX.Element => {
        if (shoppingCart.length < 1) {
            return (<EmptyCart />)
        }
        return <ProductsList products={shoppingCart} />
    }
    return (<View style={styles.mainContainer}>
        <Icon left={ICON_SPACE} onPress={() => navigation.goBack()} name="arrow-back" />
        <View style={styles.headerTextPosition}>
            <Text style={styles.headerText}>Shopping cart</Text>
        </View>
        {getProducts()}
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerTextPosition: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 15
    },
    headerText: {
        fontSize: 23,
        fontFamily: 'Bold'
    },
})

export default Cart;