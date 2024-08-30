import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Video2({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={28} color="#7F554F" />
        </TouchableOpacity>
      </View>

      {/* Video Player Container */}
      <View style={styles.videoPlayerContainer}>
        <View style={styles.videoPlayer}>
          {/* Replace with actual video component or embed */}
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150' }}
            style={styles.videoThumbnail}
            accessibilityLabel="Bust Measurement Guide"
          />
          <View style={styles.videoControls}>
            <MaterialIcons name="play-arrow" size={30} color="#FFF" style={styles.playButton} />
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}></View>
            </View>
          </View>
        </View>
        <Text style={styles.videoTitle}>Guide for Taking Bust Measurements</Text>
      </View>

      {/* Watched Section */}
      <Text style={styles.sectionTitle}>Watched</Text>
      <View style={styles.watchedContainer}>
        <View style={styles.videoItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/60' }}
            style={styles.videoThumbnailSmall}
            accessibilityLabel="Waist Measurement"
          />
          <View style={styles.videoInfo}>
            <Text style={styles.videoDescription}>Waist</Text>
            <Text style={styles.videoSubtitle}>Guide for taking waist measurements</Text>
            <View style={styles.reactions}>
              <Text style={styles.likeCount}>👍 25</Text>
              <Text style={styles.commentCount}>💬 0</Text>
            </View>
          </View>
        </View>

        <View style={styles.videoItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/60' }}
            style={styles.videoThumbnailSmall}
            accessibilityLabel="Shoulder Measurement"
          />
          <View style={styles.videoInfo}>
            <Text style={styles.videoDescription}>Shoulder</Text>
            <Text style={styles.videoSubtitle}>Guide for taking shoulder measurements</Text>
            <View style={styles.reactions}>
              <Text style={styles.likeCount}>👍 10</Text>
              <Text style={styles.commentCount}>💬 0</Text>
            </View>
          </View>
        </View>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: 'transparent',
  },
  videoPlayerContainer: {
    marginBottom: 20,
  },
  videoPlayer: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: 200,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  videoControls: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    fontSize: 30,
    color: '#FFFFFF',
    marginRight: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FFD700',
  },
  videoTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: '#7F554F',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7F554F',
  },
  watchedContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  videoThumbnailSmall: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  videoInfo: {
    flex: 1,
  },
  videoDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#7F554F',
  },
  videoSubtitle: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 5,
  },
  reactions: {
    flexDirection: 'row',
    gap: 10,
    fontSize: 14,
    color: '#7F554F',
  },
  likeCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default Video2;
