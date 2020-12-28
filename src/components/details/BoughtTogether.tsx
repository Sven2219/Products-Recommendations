import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IProduct } from '../../helpers/interfaces';
import Product from './Product';

interface IProps {
    boughtTogether: IProduct[];

}


const BoughtTogether = ({ boughtTogether }: IProps) => {
    const renderItem = (item:any) => {
        return <Product product={item} />
    }
    return (
        <FlatList
            data={boughtTogether}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderItem(item)}
        />
    )
}

export default BoughtTogether;