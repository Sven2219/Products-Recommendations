
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';


const Details = (props: any) => {
    const { product } = props.route.params;
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={{ fontSize: 40 }}>Back</Text>
            </TouchableOpacity>
            <SharedElement id={`product.${product.p_id}.photo`} style={styles.imageStyle}>
                <Image source={{ uri: product.p_image }} style={styles.imageStyle} />
            </SharedElement>
        </View>
    )
}
Details.sharedElements = (route: any, otherRoute:any, showing: any) => {
    const { product } = route.params;
    return [
        { id: `product.${product.p_id}.photo` },
    ]
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        flex: 1
    },
    imageStyle: {
        width: 125,
        height: 200,
        resizeMode: "cover"
    }
})
export default Details;;