import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Details from '../screens/Details';
import Main from '../screens/Main';
import { Easing } from 'react-native';
import { IProduct } from '../helpers/interfaces';
import { AppDispatch } from '../context/AppDispatch';
import { AppState } from '../context/AppState';
enableScreens();
const SharedElementStack = createSharedElementStackNavigator();


const SharedElementNavigation = (): JSX.Element => {
    return (
        <NavigationContainer>

            <SharedElementStack.Navigator initialRouteName={"Main"} headerMode="none">
                <SharedElementStack.Screen component={Details} name="Details"
                    options={() => ({
                        cardOverlayEnabled: true,
                        gestureEnabled: false,
                        transitionSpec: {
                            open: {
                                animation: "timing", config: {
                                    duration: 300,
                                    easing: Easing.inOut(Easing.linear)
                                }
                            },
                            close: {
                                animation: "timing", config: {
                                    duration: 300,
                                    easing: Easing.inOut(Easing.linear),

                                }
                            }
                        },
                        /*This ensure our fade in fade out animation.
                        It gives us current progress while animating 
                        and depend on this progress we change opacity*/
                        cardStyleInterpolator: ({ current: { progress } }) => {
                            return {
                                cardStyle: {
                                    opacity: progress,
                                }
                            }
                        }
                    })}
                />
                <SharedElementStack.Screen component={Main} name="Main" />
            </SharedElementStack.Navigator>
        </NavigationContainer>
    )
}
const App = (): JSX.Element => {
    const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);
    return (
        <AppDispatch.Provider value={{ setShoppingCart }}>
            <AppState.Provider value={{ shoppingCart }}>
                <SharedElementNavigation />
            </AppState.Provider>
        </AppDispatch.Provider>
    )
}
export default App