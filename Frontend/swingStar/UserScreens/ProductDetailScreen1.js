import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductDetailScreen1 = ({ route, navigation }) => {
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/frock.png')} style={styles.productImage} />
      <Text style={styles.price}>Rs. 2375.00</Text>
      <Text style={styles.detailText}>Material: Cotton</Text>
      <Text style={styles.detailText}>Size: M, L, XL</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ProductDetailScreen1;