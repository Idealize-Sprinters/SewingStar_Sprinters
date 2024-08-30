import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const currentOrders = [
  {
    id: '1',
    color: 'Red',
    size: 'XL',
    price: 'Rs. 2500.00',
    status: 'Order Completed',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    color: 'Brown',
    size: '36 cm',
    price: 'Rs. 5200.00',
    status: 'Order Completed',
    image: 'https://via.placeholder.com/150',
  },
];

const pastOrders = [
  {
    id: '3',
    color: 'Blue',
    size: 'M',
    price: 'Rs. 1500.00',
    status: 'Order Delivered',
    image: 'https://via.placeholder.com/150',
  },
  // Add more past orders here
];

export default function CurrentOrderScreen1() {
  const [showCurrentOrders, setShowCurrentOrders] = useState(true);
  const orders = showCurrentOrders ? currentOrders : pastOrders;
  const navigation = useNavigation();

  const calculateTotal = () => {
    let totalItems = orders.length;
    let totalPrice = orders.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs. ', '').replace(',', '')), 0);
    return { totalItems, totalPrice: `Rs. ${totalPrice.toFixed(2)}` };
  };

  const total = calculateTotal();

  const handleStatusCheck = () => {
    Alert.alert("Order Status", "All orders are completed and delivered.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        
        <Text style={styles.headerText}>My Orders</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={showCurrentOrders ? styles.activeTab : styles.inactiveTab} onPress={() => setShowCurrentOrders(true)}>
          <Text style={styles.tabText}>Current Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={!showCurrentOrders ? styles.activeTab : styles.inactiveTab} onPress={() => setShowCurrentOrders(false)}>
          <Text style={styles.tabText}>Past Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#777" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('chat')}>
          <Ionicons name="chatbubbles" size={24} color="#777" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CurrentO1')}>
          <Ionicons name="cart" size={24} color="#777" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BookAppointment')}>
          <Ionicons name="calendar" size={24} color="#777" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderBox}>
            <View style={styles.orderContainer}>
              <Image style={styles.orderImage} source={{ uri: item.image }} />
              <View style={styles.orderDetails}>
                <View style={styles.colorContainer}>
                  <Text>Color: </Text>
                  <View style={[styles.colorCircle, { backgroundColor: item.color.toLowerCase() }]} />
                </View>
                <Text>Size: {item.size}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Status: {item.status}</Text>
              </View>
            </View>
            <View style={styles.summaryContainer}>
              <Text>Total Items: 1</Text>
              <Text>Total Cost: {item.price}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.statusButton} onPress={handleStatusCheck}>
        <Text style={styles.statusButtonText}>Check Order Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginBottom: 30,
    marginTop:30,
  },
  backButton: {
    color: 'brown',
    fontSize: 18,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7D4B3E',
    marginBottom:'20',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7D4B3E',
    paddingBottom: 5,
  },
  inactiveTab: {
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 18,
    color: '#7D4B3E',
  },
  orderBox: {
    borderWidth: 1,
    borderColor: '#fffde7',
    padding: 10,
    marginBottom: 20,
    borderRadius: 18,
    backgroundColor: '#bcaaa4',
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  orderDetails: {
    flex: 1,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 5,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  statusButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#7D4B3E',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:70,
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 18,
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#777',
  },

});
