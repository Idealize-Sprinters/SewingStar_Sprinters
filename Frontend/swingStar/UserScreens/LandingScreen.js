import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function LandingScreen() {
    const navigation = useNavigation();
  
    return (
        <ImageBackground 
            source={require('../assets/Back.png')} 
            style={styles.container}
        >
            <StatusBar style='light' />
           

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('UReg')}>
                    <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.push('Reg')}>
                    <Text style={styles.buttonText}>Tailor</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
  
    first: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom: 85,
    },

    second: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom: 80,
    },

    third: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FF6F00',
        textAlign: 'center',
        bottom: -260,
    },

    buttonContainer: {
        //flexDirection: 'row',
        marginTop: 80,
        bottom: -100,
        textAlign: 'center',
        alignItems: 'center',
    },
    
    button: {
        backgroundColor: '#ffb300',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 35,
        marginHorizontal: 8,
        alignItems: 'center',
        width: 250,
        height: 40,
        marginVertical:20,
    },

    buttonText: {
        color: '#7D4B3E',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
