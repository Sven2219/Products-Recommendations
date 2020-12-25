import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { ISmartphone } from '../helpers/interfaces';
import ProductsList from '../components/ProductsList';

const Smartphones = () => {
  const [info, setInfo] = useState<ISmartphone[]>([]);
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    try {
      const data = await axios.get('http://192.168.0.135:1337/');
      setInfo(data.data);
    } catch (error) {
      console.log(error)
    }
  }
  return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.title}>SMARTPHONES</Text>
    {info[0] !== undefined && <ProductsList products={info} />}
  </View>
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding:20
  }
})
export default Smartphones