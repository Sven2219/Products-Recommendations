import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MENU_HEIGHT } from '../../helpers/constants';

interface IProps {
    name: string;
    onPress: () => void;
    isActive: boolean;
}

const Category = ({ name, onPress, isActive }: IProps): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.mainContainer, styles.shadow]}>
            <Text style={[styles.categoryText, { color: isActive ? "#000" : "rgba(105, 105, 105,0.7)" }]}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: MENU_HEIGHT/2+5,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 0.001
    },
    categoryText: {
        fontSize: 17,
        fontFamily: 'Regular'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8.30,
        elevation: 5,
    }
})

export default Category;