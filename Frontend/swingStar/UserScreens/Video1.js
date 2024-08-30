import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Video1({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Custom Header with Message Icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Measurement Guide</Text>
        
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search for videos..." 
          placeholderTextColor="#888"
        />
      </View>
      
      {/* Video Thumbnails */}
      <View style={styles.videoList}>
        <TouchableOpacity 
          style={styles.videoBox}
          onPress={() => navigation.navigate('Video2')} 
        >
          <View style={styles.videoThumbnailContainer}>
            <Image 
              source={{ uri: 'https://www.youtube.com/watch?v=jLlpJYqsoO4' }} 
              style={styles.videoThumbnail}
            />
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={30} color="#FFF" />
            </View>
          </View>
          <View style={styles.videoDescription}>
            <Text style={styles.videoTitle}>Bust</Text>
            <Text style={styles.videoSubtitle}>Learn the correct way to measure your room for accurate results.</Text>
          </View>
        </TouchableOpacity>

        {/* Other video thumbnails... */}

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingBottom: 0, // Adjust padding to accommodate navbar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7D4B3E',
    marginTop:40,
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#F7F2ED',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F7F2ED',
  },
  videoList: {
    flex: 1,
  },
  videoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F2ED',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  videoThumbnailContainer: {
    width: 120,
    height: 80,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 10,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    padding: 10,
  },
  videoDescription: {
    flex: 1,
    padding: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  videoSubtitle: {
    fontSize: 14,
    color: '#666',
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

export default Video1;