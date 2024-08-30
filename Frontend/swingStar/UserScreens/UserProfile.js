import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

function UserProfile() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.nameText1}>Gayan Nisansala</Text>
        <Image 
          style={styles.profileImage} 
          source={{ uri: 'https://via.placeholder.com/150' }} 
        />
        <View style={styles.infoBox}>
          <Text style={styles.nameText2}>Gayan Nisansala</Text>
          <Text style={styles.locationText}>Awissawella, Sri Lanka</Text>
          <Text style={styles.phoneText}>+9477 5645323</Text>
        </View>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('Profile2')}  
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#777" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Msg')}>
          <Ionicons name="chatbubbles" size={24} color="#777" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} color="#777" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Appointment')}>
          <Ionicons name="calendar" size={24} color="#777" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff', 
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 90, 
    paddingBottom: 60, // To avoid content being hidden behind the navbar
  },
  profileImage: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 50,
    marginTop:20, 
  },
  nameText2: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: '#ffc107',
  },
  nameText1: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: '#7D4B3E',
  },
  locationText: { 
    fontSize: 16, 
    color: '#7D4B3E', 
    marginBottom: 5,
  },
  phoneText: { 
    fontSize: 16, 
    color: '#7D4B3E', 
    marginBottom: 20,
  },
  editButton: { 
    backgroundColor: '#7D4B3E', 
    padding: 15, 
    borderRadius: 10, 
    paddingHorizontal: 30,
  },
  editButtonText: { 
    color: '#fff', 
    fontSize: 16,
  },
  infoBox: {
    width: '75%', 
    padding: 20, 
    backgroundColor: '#bcaaa4', 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20,
    shadowColor: '#fffde7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
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

export default UserProfile;
