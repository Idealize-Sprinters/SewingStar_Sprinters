import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function EditProfile() {
  const [name, setName] = useState('Melissa Peters');
  const [email, setEmail] = useState('melpeters@gmail.com');
  const [password, setPassword] = useState('********');
  const [dob, setDob] = useState('23/05/1995');
  const [address, setAddress] = useState('Kosgama, Sri Lanka');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.nameText1}>Gayan Nisansala</Text>
      <Image 
        style={styles.profileImage} 
        source={{ uri: 'https://via.placeholder.com/150' }} 
      />
      
      {/* Name Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      </View>

      {/* Email Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      </View>

      {/* Password Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      </View>

      {/* Date of Birth Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} value={dob} onChangeText={setDob} placeholder="Date of Birth" />
      </View>

      {/* Address Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Address" />
      </View>

      <TouchableOpacity 
        style={styles.saveButton}
        onPress={() => navigation.navigate('Profile1')} // Navigate to UserProfile
      >
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center child elements horizontally
    justifyContent: 'center', // Center child elements vertically
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#7D4B3E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileImage: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20,
  },
  nameText1: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color:'#7D4B3E',
  },
  fieldContainer: {
    width: '100%', // Full width to fit container
    marginBottom: -10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7D4B3E',
   
  },
});

export default EditProfile;
