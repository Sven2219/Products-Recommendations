import React from 'react';
import { View } from 'react-native';
import { IProduct } from '../../helpers/interfaces';


interface IProps {
    togetherBought: IProduct[];
}


const BoughtTogether = ({ togetherBought }: IProps) => {
    return (
        <View>

        </View>
    )
}

export default BoughtTogether;