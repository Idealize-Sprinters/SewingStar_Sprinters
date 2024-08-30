import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const tailors = [
    { id: '1', name: 'Tailor A', location: 'Location A', image: require('../assets/frock.png') },
    { id: '2', name: 'Tailor B', location: 'Location B', image: require('../assets/frock.png') },
    { id: '3', name: 'Tailor C', location: 'Location C', image: require('../assets/frock.png') },
    { id: '4', name: 'Tailor A', location: 'Location A', image: require('../assets/frock.png') },
    { id: '5', name: 'Tailor B', location: 'Location B', image: require('../assets/frock.png') },
    { id: '6', name: 'Tailor C', location: 'Location C', image: require('../assets/frock.png') },
  ];

  const renderTailor = ({ item }) => (
    <View style={styles.box}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => navigation.navigate('ABT', { tailorId: item.id })}
      >
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchProfileRow}>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search for a tailor"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile1')}>
          <Icon name="user-circle" size={40} color="#bcaaa4" style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tailors.filter(tailor => tailor.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        renderItem={renderTailor}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CurrentO1')}>
          <Ionicons name="cart" size={24} color="#777" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('chat')}>
          <Ionicons name="chatbubbles" size={24} color="#777" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HelpDesk1')}>
          <Ionicons name="help" size={24} color="#777" />
          <Text style={styles.navText}>HelpDesk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BookAppointment')}>
          <Ionicons name="calendar" size={24} color="#777" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60, // Add padding to make space for the navbar
  },
  searchProfileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 80,
  },
  searchBarContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bcaaa4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft:10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    backgroundColor: '#bcaaa4', 
    paddingLeft:10,
    marginLeft:10,
  },
  profileIcon: {
    marginLeft: 10,
  },
  grid: {
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  connectButton: {
    marginTop: 10,
    backgroundColor: '#bcaaa4',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  connectButtonText: {
    color: 'white',
    fontSize: 12,
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

export default Home;
