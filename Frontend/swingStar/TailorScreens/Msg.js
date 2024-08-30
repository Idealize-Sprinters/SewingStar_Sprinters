import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const chats = [
  { id: '1', name: 'Gayan Nisansala', message: 'Pls take a look at the images.', time: '18.31', unreadCount: 5, avatar: require('../assets/frock.png') },
  { id: '2', name: 'Fullsnack Designers', message: 'Hello guys, we have discussed about ...', time: '16.04', unreadCount: 6, avatar: require('../assets/frock.png') },
  { id: '3', name: 'Lee Williamson', message: 'Yes, that’s gonna work, hopefully.', time: '06.12', unreadCount: 0, avatar: require('../assets/frock.png') },
  { id: '4', name: 'Ronald Mccoy', message: 'Thanks dude 😊', time: 'Yesterday', unreadCount: 0, avatar: require('../assets/frock.png') },
  { id: '5', name: 'Albert Bell', message: 'I’m happy this anime has such grea...', time: 'Yesterday', unreadCount: 0, avatar: require('../assets/frock.png') },
];

const Msg = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('All Chats'); // "All Chats" or "Unread"

  const filteredChats = chats.filter(chat => {
    const isUnread = selectedTab === 'Unread' ? chat.unreadCount > 0 : true;
    return chat.name.toLowerCase().includes(searchText.toLowerCase()) && isUnread;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadCount}>{item.unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chats</Text>
        
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#9A9A9A" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recent chats"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'All Chats' && styles.activeTab]}
          onPress={() => setSelectedTab('All Chats')}
        >
          <Text style={[styles.tabText, selectedTab === 'All Chats' && styles.activeTabText]}>All Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Unread' && styles.activeTab]}
          onPress={() => setSelectedTab('Unread')}
        >
          <Text style={[styles.tabText, selectedTab === 'Unread' && styles.activeTabText]}>Unread</Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

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
          <Text style={styles.navText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SeeappointmentsTailor2')}>
          <Ionicons name="calendar" size={24} color="#000" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
        
      </View>

      {/* Start New Chat Button */}
      <TouchableOpacity style={styles.fab} onPress={() => { /* Handle new chat start */ }}>
        <Ionicons name="chatbox-ellipses" size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#8B4513',
  },
  tabText: {
    fontSize: 16,
    color: '#9A9A9A',
  },
  activeTabText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D3D3D',
  },
  time: {
    fontSize: 12,
    color: '#9A9A9A',
  },
  message: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  unreadBadge: {
    backgroundColor: '#8B4513',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadCount: {
    color: '#FFF',
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

  fab: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#8B4513',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Msg;