import React, { useEffect, useReducer } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Category from '../components/main/Category';
import { COMPUTERS, COMPUTER_EQUIPMENT, SMARTPHONES, SMARTPHONE_EQUIPMENT, SPORT, SPORT_EQUIPMENT } from '../helpers/types';
import { Actions, IState, reducer } from '../reducers/main';
import ShopTitle from '../components/main/ShopTitle';
import ProductsList from '../components/main/ProductsList';
import axios from 'axios';
import Icon from '../components/general/Icon';
import { ICON_SPACE, MENU_HEIGHT } from '../helpers/constants';
import Cart from './Cart';


const Main = (): JSX.Element => {
    const [state, dispatch] = useReducer<React.Reducer<IState, Actions>>(reducer, { category: SMARTPHONES, products: [], cartModal: false });
    
    useEffect(() => {
        setProducts();
    }, [state.category])

    const isCategoryActive = (givenCategory: string): boolean => {
        return state.category === givenCategory;
    }

    const setProducts = async (): Promise<void> => {
        try {
            const category: string = state.category.replace(" ", "");
            const products = await axios.get(`https://recommendation1.azurewebsites.net/${category}`);
            dispatch({ type: "setProducts", payload: products.data });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ShopTitle />
            <Icon onPress={() => dispatch({ type: "setCartModal", payload: true })} right={ICON_SPACE} name="cart-outline" />
            <View style={styles.scrollViewContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Category name={SMARTPHONES}
                        onPress={() => dispatch({ type: "setCategory", payload: SMARTPHONES })}
                        isActive={isCategoryActive(SMARTPHONES)} />
                    <Category name={SMARTPHONE_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: SMARTPHONE_EQUIPMENT })}
                        isActive={isCategoryActive(SMARTPHONE_EQUIPMENT)} />
                    <Category name={COMPUTERS}
                        onPress={() => dispatch({ type: "setCategory", payload: COMPUTERS })}
                        isActive={isCategoryActive(COMPUTERS)} />
                    <Category name={COMPUTER_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: COMPUTER_EQUIPMENT })}
                        isActive={isCategoryActive(COMPUTER_EQUIPMENT)} />
                    <Category name={SPORT}
                        onPress={() => dispatch({ type: "setCategory", payload: SPORT })}
                        isActive={isCategoryActive(SPORT)} />
                    <Category name={SPORT_EQUIPMENT}
                        onPress={() => dispatch({ type: "setCategory", payload: SPORT_EQUIPMENT })}
                        isActive={isCategoryActive(SPORT_EQUIPMENT)} />
                </ScrollView>
            </View>
            {state.cartModal && <Cart onPress={() => dispatch({ type: "setCartModal", payload: false })} />}
            {state.products[0] !== undefined && < ProductsList products={state.products} />}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollViewContainer: {
        height: MENU_HEIGHT
    },

})
export default Main;