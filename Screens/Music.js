import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";

export function Music({ navigation }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    // Logic for going to the previous song
  };

  const handleForward = () => {
    // Logic for going to the next song
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/music-image.jpg")} style={styles.musicImage} />
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handleBackward}>
          <Feather name="skip-back" size={50} color="white" style={styles.controlButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
          <Feather name={isPlaying ? "pause" : "play"} size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward}>
          <Feather name="skip-forward" size={50} color="white" style={styles.controlButton} />
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  musicImage: {
    width: 300,
    height: 300,
    borderRadius: 50,
    marginBottom: 30,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    marginHorizontal: 20,
  },
  playButton: {
    backgroundColor: '#444444',
    padding: 30,
    borderRadius: 50,
  },
});