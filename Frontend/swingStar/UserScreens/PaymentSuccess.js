import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentSuccess = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.message}>Booking completed</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('CurrentO1')}>
                <Text style={styles.buttonText}>See My Order</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: 60,
        color: '#28a745',
        marginBottom: 20,
    },
    message: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#7D4B3E',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default PaymentSuccess;
