import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';

const BookAppointment = ({ navigation }) => {
    const [date, setDate] = useState(new Date(2024, 6, 27)); // July is month 6 (0-indexed)
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [timeSlot, setTimeSlot] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const handleBooking = () => {
        if (timeSlot) {
            navigation.navigate('PaymentSuccess');
        } else {
            alert('Please select a time slot.');
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#7D4B3E', '#a0522d']} // Gradient colors from brown to saddle brown
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.profileSection}
            >
                <View style={styles.profileContent}>
                    <Image
                        source={{ uri: 'https://your-image-url.com' }} // Replace with the actual image URL
                        style={styles.profilePic}
                    />
                    <View style={styles.details}>
                        <Text style={styles.name}>Melissa Peters</Text>
                        <Text style={styles.stars}>⭐️⭐️⭐️⭐️</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.dateSection}>
                <Text style={styles.chooseDate}>Choose a Date</Text>
                <TouchableOpacity onPress={showDatepicker} style={styles.dateButton}>
                    <Text style={styles.dateText}>{date.toDateString()}</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>

            <View style={styles.timeSlotSection}>
                <TouchableOpacity
                    style={[styles.timeSlot, timeSlot === 'morning' ? styles.selectedSlot : null]}
                    onPress={() => setTimeSlot('morning')}
                >
                    <Text style={styles.timeSlotText}>Morning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.timeSlot, timeSlot === 'evening' ? styles.selectedSlot : null]}
                    onPress={() => setTimeSlot('evening')}
                >
                    <Text style={styles.timeSlotText}>Evening</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.bookNowButton} onPress={handleBooking}>
                <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    profileSection: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginTop:50,
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    details: {
        flex: 1,
        //justifyContent: 'center',
        marginTop:10,
        paddingHorizontal:25,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    stars: {
        fontSize: 18,
        color: '#ffd700',
    },
    dateSection: {
        marginBottom: 20,
        marginTop:20,
    },
    chooseDate: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    dateButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 8,
        alignItems: 'center',
    },
    dateText: {
        fontSize: 18,
    },
    timeSlotSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    timeSlot: {
        padding: 15,
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
    selectedSlot: {
        backgroundColor: '#8b4513',
    },
    timeSlotText: {
        fontSize: 16,
        color: '#fff',
    },
    bookNowButton: {
        backgroundColor: '#7D4B3E',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop:60,
    },
    bookNowText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default BookAppointment;
