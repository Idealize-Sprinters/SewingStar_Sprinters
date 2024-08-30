import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const todayAppointments = [
  { id: '1', name: 'Gayan Nisansala', period: 'morning' },
  { id: '2', name: 'Lee Williason', period: 'morning' },
  { id: '3', name: 'Rohan Silva', period: 'evening' },
];

const upcomingAppointments = [
  {
    date: '28/07/2024',
    morning: 3,
    evening: 2,
  },
  {
    date: '30/07/2024',
    morning: 2,
    evening: 2,
  },
];

export default function TailorHome() {
  const navigation = useNavigation();

  const navigateToDetail = (appointment) => {
    navigation.navigate('SeeappointmentsTailor2', { appointment });
  };

  const navigateToAllAppointments = () => {
    navigation.navigate('SeeappointmentsTailor1');
  };

  const navigateToProfile = () => {
    navigation.navigate('TPScreen'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateToProfile} style={styles.profileIcon}>
            <Ionicons name="person" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Today's appointments</Text>
          <Text style={styles.dateText}>27/07/2024</Text>
        </View>

        <FlatList
          horizontal
          data={todayAppointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.appointmentCard}>
              <Image style={styles.appointmentImage} source={require('../assets/frock.png')} />
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.periodText}>{item.period}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>morning</Text>
            <Text style={styles.tabNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Evening</Text>
            <Text style={styles.tabNumber}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.upcomingContainer}>
          <Text style={styles.upcomingText}>Upcoming</Text>
          {upcomingAppointments.map((item, index) => (
            <TouchableOpacity key={index} style={styles.upcomingCard} onPress={() => navigateToDetail(item)}>
              <View style={styles.leftSide}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.detailText}>Morning: {item.morning}</Text>
                <Text style={styles.detailText}>Evening: {item.evening}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.viewAllButton} onPress={navigateToAllAppointments}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 30,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
    backgroundColor: '#cda566',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    position: 'absolute',
    left: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 50,
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 100,
  },
  appointmentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  periodText: {
    fontSize: 12,
    color: '#aaa',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 8,
  },
  tab: {
    backgroundColor: '#f4c68d',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
  },
  tabNumber: {
    fontSize: 18,
    color: '#fff',
  },
  upcomingContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  upcomingText: {
    fontSize: 18,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  upcomingCard: {
    backgroundColor: '#eaeaea',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#7D4B3E',
  },
  viewAllButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  viewAllText: {
    color: '#cda566',
    fontSize: 14,
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
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 3,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
});
