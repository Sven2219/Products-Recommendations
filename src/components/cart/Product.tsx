import React from 'react';
import { Text, View } from 'react-native';
import { IProduct } from '../../helpers/interfaces';

interface IProps {
    item: IProduct;
}

const Product = ({ item }: IProps): JSX.Element => {
    return (<View>
        <Text>

        </Text>
    </View>)
}


export default Product;