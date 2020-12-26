import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ICON_SPACE, ICON_TOP } from '../helpers/constants';
import Icon from '../components/general/Icon';

interface IProps {
    navigation: any;
}

const Cart = ({ navigation }: IProps) => {
    return (<View style={styles.mainContainer}>
        <Icon left={ICON_SPACE} onPress={() => navigation.goBack()} name="arrow-back" />
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    arrowBackContainer: {
        position: 'absolute',
        left: ICON_SPACE,
        top: ICON_TOP
    }
})

export default Cart;