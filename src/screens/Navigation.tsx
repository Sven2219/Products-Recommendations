import 'react-native-gesture-handler';

  
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Details from './Details';
import Main from './Main';
import { Easing } from 'react-native';
enableScreens();
const Stack = createSharedElementStackNavigator();



const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Main"} headerMode="none">
                <Stack.Screen component={Details} name="Details"
                    options={() => ({
                        cardOverlayEnabled: true,
                        gestureEnabled: false,
                        transitionSpec: {
                            open: {
                                animation: "timing", config: {
                                    duration: 300,
                                    easing: Easing.inOut(Easing.ease)
                                }
                            },
                            close: {
                                animation: "timing", config: {
                                    duration: 300,
                                    easing: Easing.inOut(Easing.ease),
                                    
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
                <Stack.Screen component={Main} name="Main" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;