
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const appointmentsDetails = [
  { id: 1, name: 'Gayan Nisansala', time: 'Morning', image: require('../assets/frock.png') },
  { id: 2, name: 'Lao Wilksson', time: 'Evening', image: require('../assets/frock.png') },
  { id: 3, name: 'Albert Bell', time: 'Evening', image: require('../assets/frock.png') },
];

const SeeappointmentsTailor2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { date } = route.params || { date: "28/07/2024" };
  const [accepted, setAccepted] = useState({});

  const handleAccept = (id) => {
    setAccepted({ ...accepted, [id]: true });
  };

  const handleMessage = (id) => {
    // Navigate to the message page
    navigation.navigate('Chats', { appointmentId: id });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#7D4B3E" />
        </TouchableOpacity>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Appointment List */}
      {appointmentsDetails.map((appointment) => (
        <View key={appointment.id} style={styles.detailItem}>
          <Image source={appointment.image} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{appointment.name}</Text>
            <Text style={styles.timeText}>{appointment.time}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.acceptButton,
              accepted[appointment.id] && styles.acceptedButton,
            ]}
            onPress={() => handleAccept(appointment.id)}
          >
            <Text style={styles.acceptButtonText}>
              {accepted[appointment.id] ? 'Accepted' : 'Accept'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.messageButton}
            onPress={() => handleMessage(appointment.id)}
          >
            <Ionicons name="chatbubble" size={24} color="#7D4B3E" />
          </TouchableOpacity>
        </View>
      ))}

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TailorHome')}>
          <Ionicons name="home" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Msg')}>
          <Ionicons name="chatbubbles" size={24} color="#000" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MyOrders')}>
          <Ionicons name="cart" size={24} color="#000" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SeeappointmentsTailor2')}>
          <Ionicons name="calendar" size={24} color="#000" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20, 
    color: '#7D4B3E',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#666',
  },
  acceptButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginLeft: 10,
  },
  acceptedButton: {
    backgroundColor: '#7D4B3E',
  },
  acceptButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageButton: {
    marginLeft: 10,
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
    width: '110%',
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

export default SeeappointmentsTailor2;
