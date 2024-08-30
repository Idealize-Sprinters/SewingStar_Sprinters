import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const TailorProfileScreen = () => {
    const navigation = useNavigation(); // Use the useNavigation hook
    const [selectedTab, setSelectedTab] = useState('works');

    // State to manage works
    const [works, setWorks] = useState([
        require('../assets/frock.png'),
        require('../assets/frock.png'),
        require('../assets/frock.png'),
        require('../assets/frock.png'),
        require('../assets/frock.png'),
        require('../assets/frock.png'),
    ]);

    // Function to delete a work
    const deleteWork = (index) => {
        const newWorks = [...works];
        newWorks.splice(index, 1);
        setWorks(newWorks);
    };

    // Function to add a new work (For example, adding a new frock image)
    const addWork = () => {
        setWorks([...works, require('../assets/frock.png')]);
    };

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
                        onPress={() => navigation.navigate('MyOrders')}
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
                        {works.map((work, index) => (
                            <View key={index} style={styles.workRow}>
                                <Image source={work} style={styles.workImage} />
                                <TouchableOpacity onPress={() => deleteWork(index)}>
                                    <Ionicons name="trash" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                        ))}
                        <TouchableOpacity style={styles.addButton} onPress={addWork}>
                            <Ionicons name="add-circle" size={24} color="#795548" />
                            <Text style={styles.addButtonText}>Add New Work</Text>
                        </TouchableOpacity>
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
        width: '80%',
        height: 150,
        borderRadius: 10,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom:20,
    },
    addButtonText: {
        fontSize: 16,
        color: '#795548',
        marginLeft: 10,
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

export default TailorProfileScreen;
