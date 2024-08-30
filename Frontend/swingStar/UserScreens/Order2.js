import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Order2({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(require('../assets/frock.png'));
  const [activeTab, setActiveTab] = useState('Measurement');

  const images = [
    require('../assets/frock.png'),
    require('../assets/frock.png'),
    require('../assets/frock.png'),
  ];

  const renderMeasurementTab = () => (
    <View style={styles.measurementSection}>
      <Text style={styles.label}>Measurements</Text>
      <View style={styles.measurementTable}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumnLeft}>Chest:</Text>
          <Text style={styles.tableColumnRight}>114 cm / 44 inches</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumnLeft}>Waist:</Text>
          <Text style={styles.tableColumnRight}>112 cm / 44 inches</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumnLeft}>Sleeve Length:</Text>
          <Text style={styles.tableColumnRight}>20 cm / 8 inches</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumnLeft}>Product Length:</Text>
          <Text style={styles.tableColumnRight}>76 cm / 30 inches</Text>
        </View>
      </View>

      {/* Buttons Side by Side */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.expectedDateButton}
          onPress={() => navigation.navigate('ExpectedDate')}
        >
          <Text style={styles.buttonText}>Expected Date</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tryOnButton}
          onPress={() => navigation.navigate('TryOnVirtually')}
        >
          <Text style={styles.buttonText}>Try On Virtually</Text>
        </TouchableOpacity>
      </View>

      {/* Total Amount Section */}
      <View style={styles.totalRow}>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('Payment1')}
        >
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
        <Text style={styles.totalText}>Total : Rs. 2500.00</Text>
      </View>
    </View>
  );

  const renderMaterialTab = () => (
    <View style={styles.materialSection}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchLabel}>Search Material:</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Type to search..."
          placeholderTextColor="#666"
        />
      </View>
  
      {/* Vertical Scroll for Material Sections */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.materialItem}>
            <Image source={image} style={styles.materialThumbnail} />
            <Text style={styles.label}>color</Text>
            {/* Color Options */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.colorScroll}>
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#000' }]} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#ccc' }]} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#FF0000' }]} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#00FF00' }]} />
            </ScrollView>
          </View>
        ))}
      </ScrollView>
  
      
      
    </View>
  );
  

  const renderImageSection = () => (
    <View style={styles.imageSection}>
      {/* Vertical Image Scroll */}
      <ScrollView style={styles.verticalImageScroll}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(image)}>
            <Image source={image} style={styles.verticalThumbnailImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Selected Image Display */}
      <View style={styles.selectedImageContainer}>
        <Image source={selectedImage} style={styles.productImage} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderImageSection()}

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Material' && styles.activeTab]}
          onPress={() => setActiveTab('Material')}
        >
          <Text style={styles.tabText}>Material</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Measurement' && styles.activeTab]}
          onPress={() => setActiveTab('Measurement')}
        >
          <Text style={styles.tabText}>Measurement</Text>
        </TouchableOpacity>
      </View>
      

      {/* Tab Content */}
      {activeTab === 'Material' ? renderMaterialTab() : renderMeasurementTab()}
      

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
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F4F1',
  },
  imageSection: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 30,
  },
  verticalImageScroll: {
    width: 100,
    marginRight: 10,
  },
  verticalThumbnailImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  selectedImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  horizontalImageScroll: {
    marginBottom: 20,
  },
  horizontalThumbnailImage: {
    width: 120,  // Increased width
    height: 120, // Increased height
    //marginRight: 10,
    marginLeft:20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: -60,
  },
  tabButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  activeTab: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  measurementSection: {
    alignItems: 'center',
  },
  measurementTable: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableColumnLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tableColumnRight: {
    fontSize: 16,
    color: '#666',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  materialSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  expectedDateButton: {
    backgroundColor: '#f0ad4e',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  tryOnButton: {
    backgroundColor: '#f0ad4e',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color:'#7D4B3E',
  },
  payButton: {
    backgroundColor: '#7D4B3E',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  materialSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F4F1',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  searchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  materialItem: {
    width: '100%', // Full width of the container
    marginBottom: 20, // Spacing between sections
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  materialThumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  colorScroll: {
    marginTop: 10,
  },
  colorCircle: {
    width: 40, // Adjust the size as needed
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  nextButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
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
