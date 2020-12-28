import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICON_SPACE } from '../helpers/constants';
import Icon from '../components/general/Icon';
import axios from 'axios';
import { AppDispatch } from '../context/AppDispatch';
import { AppState } from '../context/AppState';
import { IPartOfProduct, IProduct } from '../helpers/interfaces';
import ProductsList from '../components/cart/ProductsList';
import EmptyCart from '../components/cart/EmptyCart';
import YellowButton from '../components/general/YellowButton';
import { breakToIdAndCategory, createSQLInsertStatment, groupProducts } from '../components/cart/statment';
interface IProps {
    navigation: any;
}

const Cart = ({ navigation }: IProps): JSX.Element => {
    const { shoppingCart } = useContext(AppState);
    const { setShoppingCart } = useContext(AppDispatch);



    const saveToDatabase = async (): Promise<void> => {
        try {
            const categorysAndIDs: IPartOfProduct[] = breakToIdAndCategory(shoppingCart);
            const groupedProducts = groupProducts(categorysAndIDs);
            const sqlStatment: string = createSQLInsertStatment(groupedProducts.groupedSmartphones, groupedProducts.groupedComputers, groupedProducts.groupedSports);
            const result = await axios.post('https://recommendation1.azurewebsites.net/', { statment: sqlStatment });
            if (result.data) {
                setShoppingCart([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const saveProducts = (): JSX.Element | undefined => {
        if (shoppingCart.length > 0) {
            return (<YellowButton onPress={saveToDatabase} title={"Confirm"} />)
        }
    }
    const getProducts = (): JSX.Element => {
        if (shoppingCart.length < 1) {
            return (<EmptyCart />)
        }
        return <ProductsList products={shoppingCart} />
    }
    const getTotalPrice = (): number => {
        return shoppingCart.reduce((accumulator, item) => accumulator + item.p_price, 0);
    }
    return (<View style={styles.mainContainer}>
        <Icon left={ICON_SPACE} onPress={() => navigation.goBack()} name="arrow-back" />
        <View style={styles.headerTextPosition}>
            <Text style={styles.headerText}>Shopping cart</Text>
        </View>
        {getProducts()}
        {saveProducts()}
        <View style={styles.totalPricePosition}>
            <Text style={styles.totalPrice}>{getTotalPrice()} kn</Text>
        </View>
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
        marginTop: 15
    },
    headerText: {
        fontSize: 23,
        fontFamily: 'Bold'
    },
    totalPricePosition: {
        position: 'absolute',
        bottom: 30,
        left: 20
    },
    totalPrice: {
        fontFamily: 'Bold',
        fontSize: 20
    }
})

export default Cart;