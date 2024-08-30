import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'; // Added MaterialIcons import
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Phone1() {
  const navigation = useNavigation(); // Use the navigation hook

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Contact</Text>
      
      {/* Big Box */}
      <View style={styles.bigBox}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#888"
          multiline
        />
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Phone2')}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Icons */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="facebook" size={30} color="#704F38" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="instagram" size={30} color="#704F38" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="youtube" size={30} color="#704F38" />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    alignItems: 'center',
    paddingBottom: 80, // Extra padding to account for the bottom navigation bar
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7D4B3E',
    marginBottom: 20,
    marginTop:30,
  },
  bigBox: {
    width: '100%',
    backgroundColor: '#F7F2ED',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  submitButton: {
    backgroundColor: '#7D4B3E', // Brown color
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  iconBox: {
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: '#F2F2F2', // Light gray color for the icon boxes
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Phone1;