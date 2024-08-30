import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const AboutTailor = () => {
    const navigation = useNavigation(); // Use the useNavigation hook
    const [selectedTab, setSelectedTab] = useState('works');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image 
                        source={require('../assets/frock.png')} // Assuming you have this image in your assets folder
                        style={styles.headerImage} 
                    />
                </View>
                <View style={styles.profileContainer}>
                    <Image 
                        source={require('../assets/frock.png')} // Assuming you have this image in your assets folder
                        style={styles.profileImage} 
                    />
                    <Text style={styles.name}>Melissa Peters</Text>
                    <Text style={styles.subtitle}>Young Style</Text>
                    <Text style={styles.location}>Kosgama, Sri Lanka</Text>
                    <Text style={styles.phone}>+9477 5645323</Text>
                    <TouchableOpacity 
                        style={styles.orderButton}
                        onPress={() => navigation.navigate('Order1')}
                    >
                        <Text style={styles.orderButtonText}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity 
                        style={[styles.tabButton, selectedTab === 'works' && styles.activeTabButton]} 
                        onPress={() => setSelectedTab('works')}
                    >
                        <Text style={styles.tabButtonText}>Works</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.tabButton, selectedTab === 'reviews' && styles.activeTabButton]} 
                        onPress={() => setSelectedTab('reviews')}
                    >
                        <Text style={styles.tabButtonText}>Reviews</Text>
                    </TouchableOpacity>
                </View>

                {selectedTab === 'works' ? (
                    <View style={styles.worksContainer}>
                        <View style={styles.workRow}>
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                        </View>
                        <View style={styles.workRow}>
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                            <Image source={require('../assets/frock.png')} style={styles.workImage} />
                        </View>
                        {/* Add more rows as needed */}
                    </View>
                ) : (
                    <View style={styles.reviewsContainer}>
                        <Text style={styles.ratingText}>4.3</Text>
                        <Text style={styles.ratingSubtext}>324 ratings</Text>
                        <View style={styles.starsContainer}>
                            {/* Star Rating Placeholder */}
                            <Text>⭐⭐⭐⭐</Text> 
                        </View>
                        <Text style={styles.certificationText}>Certified by XYZ</Text>
                    </View>
                )}
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 60, // To make space for the navbar
    },
    header: {
        height: 200,
        marginTop: 40,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#a5a5a5',
    },
    location: {
        fontSize: 14,
        color: '#a5a5a5',
        marginTop: 5,
    },
    phone: {
        fontSize: 14,
        color: '#a5a5a5',
    },
    orderButton: {
        backgroundColor: '#795548',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginTop: 20,
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    activeTabButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#795548',
    },
    tabButtonText: {
        fontSize: 16,
        color: '#795548',
    },
    worksContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    workRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    workImage: {
        width: '32%',
        height: 150,
        borderRadius: 10,
    },
    reviewsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    ratingText: {
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
    },
    ratingSubtext: {
        fontSize: 14,
        color: '#a5a5a5',
        marginTop: 5,
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    certificationText: {
        fontSize: 14,
        color: '#a5a5a5',
        marginTop: 10,
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

export default AboutTailor;
