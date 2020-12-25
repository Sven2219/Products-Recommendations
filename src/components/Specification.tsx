import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    label: string;
    value: string;
}


const Specification = ({ label, value }: IProps) => {
    return (
        <View style={styles.specificationContainer}>
            <Text style={styles.labelText}>{label}</Text>
            <Text>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    specificationContainer: {
        flexDirection: 'row'
    },
    labelText: {
        fontWeight: 'bold'
    }
})
export default Specification;