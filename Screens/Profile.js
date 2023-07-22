import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { Footer } from "../Components/Footer";
import * as ImagePicker from 'expo-image-picker'; // Import the expo-image-picker module
import Constants from 'expo-constants'; // Import Constants from expo

export function Profile({ navigation }) {
  const [musicName, setMusicName] = useState("");
  const [singerName, setSingerName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSaveData = () => {
    setMessage("Music data added successfully");
    setMusicName("");
    setSingerName("");
    setSelectedImage(null);

    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access the gallery was denied.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      // Instead of using 'uri', access selected assets through 'assets' array
      const selectedAsset = result.assets[0];
      setSelectedImage({ uri: selectedAsset.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 27 }}></View>
      <View style={styles.upperdata}>
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

          {/* Image Picker Button */}
          <TouchableOpacity style={styles.selectImageButton} onPress={handleSelectImage}>
            <Text style={styles.selectImageButtonText}>Select Image</Text>
          </TouchableOpacity>

          {selectedImage && (
            <Image source={selectedImage} style={styles.previewImage} />
          )}

          <View style={{ marginBottom: 12 }}></View>
          <Button title="Save Data" onPress={handleSaveData} />

          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      </View>
      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    justifyContent: "center",
  },
  upperdata:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width:'88%',
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
  selectImageButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  selectImageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  previewImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
