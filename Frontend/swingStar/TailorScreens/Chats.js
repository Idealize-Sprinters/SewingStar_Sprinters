import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from "react-native";

const Chats = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const chat = []; // Example chat data
  const renderChatItem = ({ item }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  const handleUserInput = () => {
    // Handle user input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwingStart Chat</Text>
      <FlatList
        data={chat}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here.."
          placeholderTextColor="#7D4B3E"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={styles.loading} color="#333" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#7D4B3E',
    marginBottom: 20,
    marginTop: 50,
    textAlign: "center",
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    padding: 10,
    borderColor: "#080742",
    borderWidth: 1,
    borderRadius: 25,
    color: "#7D4B3E",
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#7D4B3E",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    
  },
  loading: {
    marginTop: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Chats;
