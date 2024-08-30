import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation(); // Initialize useNavigation

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://192.168.68.116:8081/login", {
        email,
        password,
      });

      if (res.status === 200) {
        // Assuming status 200 indicates success
        alert(res.data.msg);
        navigation.navigate("TailorHome"); // Navigate to TailorProfileScreen
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://your-image-url.com" }} // Replace with your image URL
        style={styles.logo}
      />
      <Text style={styles.title}>Login Account</Text>
      <Text style={styles.subtitle}>
        Hello, you must login first to be able to use the application and enjoy
        all the features in SawingStar
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or Sign In With</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signupLink}
        onPress={() => navigation.navigate("Reg")} // Navigate to RegisterScreen
      >
        <Text style={styles.linkText}>Don't have an account? Join Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F3F3F3",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    color: "#666",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  error: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
  signInButton: {
    backgroundColor: "#6B4226",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  socialButton: {
    padding: 10,
    borderRadius: 5,
  },
  signupLink: {
    marginTop: 20,
  },
  linkText: {
    color: "#6B4226",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
