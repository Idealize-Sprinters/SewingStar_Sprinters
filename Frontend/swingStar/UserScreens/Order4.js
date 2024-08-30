import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function ImageGridScreen() {
  const images = [
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
  ];

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}  // 3 images per row
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F4F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,   // Adjust width to fit 3 images per row
    height: 100,  // Adjust height as needed
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
