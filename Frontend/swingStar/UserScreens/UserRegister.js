import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

export default function UserRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://192.168.68.116:8081/register", {
        firstName,
        lastName,
        email,
        address,
        password,
      });

      if (response.status === 201) {
        alert("User registered successfully");
      }
    } catch (error) {
      console.error(error); // Log error details to the console
      alert(error.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        // source={require("./path_to_your_image.png")} // Ensure the image path is correct
        style={styles.headerImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>Register Account</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Address with Postal Code"
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <Ionicons
          name={passwordVisible ? "eye-off" : "eye"}
          size={24}
          color="black"
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!passwordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Ionicons
          name={passwordVisible ? "eye-off" : "eye"}
          size={24}
          color="black"
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text
        style={styles.footerText}
        onPress={() => navigation.navigate("Ulogin")}
      >
        Already have an account? <Text style={styles.loginText}>Log In</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6C4A2F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  footerText: {
    fontSize: 14,
  },
  loginText: {
    color: "#FFA500",
    fontWeight: "bold",
  },
});
