import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { width, height, IMAGE_SIZE } from '../../helpers/constants';
import { IProduct } from '../../helpers/interfaces';

interface IProps {
    product: IProduct;
    scrollX: Animated.Value;
    index: number;
    navigation: any;
}

const Product = ({ product, scrollX, index, navigation }: IProps) => {
    const inputRange = [(index - 1) * width, (index) * width, (index + 1) * width];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0]
    })
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [width, 0, -width]
    })
    return (
        <View style={styles.productStyle}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { product })} style={styles.imageSize}>
                <SharedElement id={`product.${product.p_id}.photo`} style={[styles.imageStyle, styles.imageSize]}>
                    <Animated.Image
                        source={{ uri: product.p_image }}
                        style={[
                            styles.imageStyle,
                            { transform: [{ scale }] }
                        ]}
                    />
                </SharedElement>
            </TouchableWithoutFeedback >
            <View style={styles.textContainer}>
                <Animated.Text
                    style={[
                        styles.price,
                        { transform: [{ translateX }] }
                    ]}
                >
                    Price: {product.p_price}
                </Animated.Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'contain',
        flex: 1,
    },
    imageSize: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE
    },
    productStyle: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flex: 0.5,
    },

    price: {
        color: '#000',
        fontFamily: 'Medium',
        textAlign: 'center',
        width: width,
        fontSize: 16,
        lineHeight: 16 * 1.5,
    },
})
export default React.memo(Product, (prevProps, currentProps) => {
    return prevProps.product == currentProps.product;
});