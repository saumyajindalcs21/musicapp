import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";

export function Profile({ navigation }) {
  const [musicName, setMusicName] = useState("");
  const [singerName, setSingerName] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveData = () => {
    setMessage("New music added successfully");
    setMusicName("");
    setSingerName("");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <View style={styles.container}>
        <View style={{ marginBottom: 27 }}></View>
      <Text style={styles.title}>Data from FireStore Database</Text>
      <View style={styles.content}>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter music name"
          placeholderTextColor="white"
          value={musicName}
          onChangeText={setMusicName}
        />

        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter singer name"
          placeholderTextColor="white"
          value={singerName}
          onChangeText={setSingerName}
        />
        <View style={{ marginBottom: 12 }}></View>
        <Button title="Save Data" onPress={handleSaveData} />

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>

      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#2C3E50',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 28,
    color: 'white',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderRadius:20,
  },
  message: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});
