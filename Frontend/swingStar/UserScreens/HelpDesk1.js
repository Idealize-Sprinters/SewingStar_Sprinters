import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HelpDesk1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Welcome to Help Desk!</Text>
        </View>

        {/* Frequently Asked Questions */}
        <Text style={styles.faqText}>Frequently Asked Questions</Text>

        {/* Question Boxes */}
        <View style={styles.questionsContainer}>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>How do I cancel an order?</Text>
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>How do I get the measurement correctly?</Text>
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>How do I place an order?</Text>
          </View>
        </View>

        {/* Icons Section */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity 
            style={styles.iconBox} 
            onPress={() => navigation.navigate('Video1')}
          >
            <MaterialIcons name="videocam" size={30} color="#888888" />
            <Text style={styles.iconText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconBox} 
            onPress={() => navigation.navigate('Phone1')}
          >
            <MaterialIcons name="phone" size={30} color="#888888" />
            <Text style={styles.iconText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconBox} 
            onPress={() => navigation.navigate('Ideas1')}
          >
            <MaterialIcons name="lightbulb-outline" size={30} color="#888888" />
            <Text style={styles.iconText}>Ideas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 70, // Extra padding at the bottom to prevent overlap with the navbar
  },
  headerBox: {
    width: '100%',
    backgroundColor: '#7D4B3E',
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  faqText: {
    fontSize: 18,
    color: '#888888',
    marginBottom: 20,
  },
  questionsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  questionBox: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  questionText: {
    fontSize: 16,
    color: '#888888',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  iconText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
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

export default HelpDesk1;