import React, { useEffect, useReducer } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Category from '../components/general/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COMPUTERS, COMPUTER_EQUIPMENT, SMARTPHONES, SMARTPHONE_EQUIPMENT, SPORT, SPORT_EQUIPMENT } from '../helpers/types';
import { Actions, IState, reducer } from '../reducers/main';
import ShopTitle from '../components/general/ShopTitle';
import ProductsList from '../components/products/ProductsList';
import axios from 'axios';
interface IProps {
    navigation: any;
}

const Main = ({ navigation }: IProps) => {
    const [state, dispatch] = useReducer<React.Reducer<IState, Actions>>(reducer, { category: SMARTPHONES, products: [] });
    const isActive = (givenCategory: string): boolean => {
        return state.category === givenCategory;
    }
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        try {
            const products = await axios.get('http://192.168.0.135:1337/');
            dispatch({ type: "setProducts", payload: products.data });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ShopTitle />
            <View style={styles.cartContainer}>
                <Ionicons name="cart-outline" size={35} />
            </View>
            <View style={{ height: 50 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Category name={SMARTPHONES}
                        onPress={() => dispatch({ type: "setCategory", payload: SMARTPHONES })}
                        isActive={isActive(SMARTPHONES)} />
                    <Category name={SMARTPHONE_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: SMARTPHONE_EQUIPMENT })}
                        isActive={isActive(SMARTPHONE_EQUIPMENT)} />
                    <Category name={COMPUTERS}
                        onPress={() => dispatch({ type: "setCategory", payload: COMPUTERS })}
                        isActive={isActive(COMPUTERS)} />
                    <Category name={COMPUTER_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: COMPUTER_EQUIPMENT })}
                        isActive={isActive(COMPUTER_EQUIPMENT)} />
                    <Category name={SPORT}
                        onPress={() => dispatch({ type: "setCategory", payload: SPORT })}
                        isActive={isActive(SPORT)} />
                    <Category name={SPORT_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: SPORT_EQUIPMENT })}
                        isActive={isActive(SPORT_EQUIPMENT)} />
                </ScrollView>
            </View>
            { state.products[0] !== undefined && < ProductsList navigation={navigation} products={state.products} />}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },

    cartContainer: {
        position: 'absolute',
        top: 15,
        right: 10
    }
})
export default Main;