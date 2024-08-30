import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './TailorScreens/LoginScreen';
import LandingScreen from './UserScreens/LandingScreen';
import UserProfile from './UserScreens/UserProfile';
import EditProfile from './UserScreens/EditProfile';
import CurrentOrderScreen1 from './UserScreens/CurrentOrderScreen1';
import BookAppointment from './UserScreens/BookAppointment';
import PaymentSuccess from './UserScreens/PaymentSuccess';
import Order1 from './UserScreens/Order1';
import ProductDetailScreen1 from './UserScreens/ProductDetailScreen1';
import Order2 from './UserScreens/Order2';
import Order4 from './UserScreens/Order4';
import RegisterScreen from './TailorScreens/RegisterScreen';
import TailorProfileScreen from './TailorScreens/TailorProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from './UserScreens/Home';
import SeeappointmentsTailor1 from './TailorScreens/SeeappointmentsTailor1';
import SeeappointmentsTailor2 from './TailorScreens/SeeappointmentsTailor2';
import Msg from './TailorScreens/Msg';
import payment1 from './UserScreens/Payment1';
import HelpDesk1 from './UserScreens/HelpDesk1';
import HelpDesk2 from './UserScreens/HelpDesk2';
import Ideas1 from './UserScreens/Ideas1';
import Phone1 from './UserScreens/Phone1';
import Phone2 from './UserScreens/Phone2';
import Video1 from './UserScreens/Video1';
import Video2 from './UserScreens/Video2';
import TailorChat from './UserScreens/TailorChat';
import AboutTailor from './UserScreens/AboutTailor';
import PaymentSuccess2 from './UserScreens/PaymentSuccess2';
import UserLogin from './UserScreens/UserLogin';
import UserRegister from './UserScreens/UserRegister';
import MyOrders from './TailorScreens/MyOrders';
import TailorHome from './TailorScreens/TailorHome';
import Chats from './TailorScreens/Chats';
import Payment1 from './UserScreens/Payment1';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      < Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Profile1" component={UserProfile} />
        <Stack.Screen name="Profile2" component={EditProfile} />
        <Stack.Screen name="CurrentO1" component={CurrentOrderScreen1} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="Order1" component={Order1} />
        <Stack.Screen name="PDetails1" component={ProductDetailScreen1} />
        <Stack.Screen name="Order2" component={Order2} />
        <Stack.Screen name="Order4" component={Order4} />
        <Stack.Screen name="Reg" component={RegisterScreen} />
        <Stack.Screen name="Tailor1" component={TailorProfileScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SeeappointmentsTailor1" component={SeeappointmentsTailor1} />
        <Stack.Screen name="SeeappointmentsTailor2" component={SeeappointmentsTailor2} />
        <Stack.Screen name="Msg" component={Msg} />
        <Stack.Screen name="Payment1" component={Payment1} />
        <Stack.Screen name="HelpDesk1" component={HelpDesk1} />
        <Stack.Screen name="HelpDesk2" component={HelpDesk2} />
        <Stack.Screen name="Ideas1" component={Ideas1} />
        <Stack.Screen name="Phone1" component={Phone1} />
        <Stack.Screen name="Phone2" component={Phone2} />
        <Stack.Screen name="Video1" component={Video1} />
        <Stack.Screen name="Video2" component={Video2} />
        <Stack.Screen name="chat" component={TailorChat} />
        <Stack.Screen name="ABT" component={AboutTailor} />
        <Stack.Screen name="PaymentSuccess2" component={PaymentSuccess2} />
        <Stack.Screen name="Ulogin" component={UserLogin} />
        <Stack.Screen name="UReg" component={UserRegister} />
        <Stack.Screen name="TPScreen" component={TailorProfileScreen} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="TailorHome" component={TailorHome} />
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
