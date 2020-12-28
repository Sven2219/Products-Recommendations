import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON_SIZE, ICON_SPACE, ICON_TOP } from '../../helpers/constants';

interface IProps {
    onPress: () => void;
    left?: number;
    right?: number;
    name: string;
}

const Icon = ({ onPress, left, right, name }: IProps): JSX.Element => {
    return (
        <View style={[styles.cartContainer, { left: left, right: right }]}>
            <Ionicons name={name} size={ICON_SIZE} onPress={onPress} />
        </View>
    )
}
const styles = StyleSheet.create({
    cartContainer: {
        position: 'absolute',
        top: ICON_TOP,
        zIndex: 1
    }
})

export default Icon;