import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { IProduct } from '../../helpers/interfaces';

interface IProps {
    navigation: any;
    product: IProduct
}

const Product = ({ navigation, product }: IProps) => {
    return (
        <TouchableOpacity onPress={() => navigation.push('Details', { product })} >
            <SharedElement id={`product.${product.p_id}.photo`}>
                <Image source={{ uri: product.p_image }} style={{ resizeMode: "stretch", width: 150, height: 150 }} />
            </SharedElement>
        </TouchableOpacity>)
}

export default Product;