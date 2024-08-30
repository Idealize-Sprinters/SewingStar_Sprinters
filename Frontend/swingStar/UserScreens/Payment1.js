import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure this is installed

const Payment1 = ({ navigation }) => {
  const [selectedVisa, setSelectedVisa] = useState(false); // State to track if Visa is selected

  const cards = [
    { id: '1', bankName: 'Bank Name', selected: true },
    { id: '2', bankName: 'Bank Name', selected: false },
  ];

  const toggleVisaSelection = () => {
    setSelectedVisa(!selectedVisa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <FlatList
        data={cards}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={require('../assets/frock.png')} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.bankName}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.visaSelectButton}
        onPress={toggleVisaSelection}
      >
        {selectedVisa ? (
          <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
        ) : (
          <Ionicons name="ellipse-outline" size={24} color="brown" style={styles.icon} />
        )}
        <Text style={styles.visaSelectText}>Visa Card</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Other Payment Methods</Text>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentOptionBox}>
          <Text style={styles.paymentOptionText}>Credit Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOptionBox}>
          <Text style={styles.paymentOptionText}>Google Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOptionBox}>
          <Text style={styles.paymentOptionText}>Paypal</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentSuccess2')}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardContainer: {
    marginRight: 8,
  },
  cardImage: {
    width: 200,  // Adjust the width as needed
    height: 120, // Adjust the height as needed
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  visaSelectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
  },
  visaSelectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, // Added margin to separate the icon and text
  },
  icon: {
    marginRight: 8, // Adjust spacing as needed
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
  paymentOptions: {
    marginBottom: 16,
  },
  paymentOptionBox: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  paymentOptionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#8B4513',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default 





Payment1;