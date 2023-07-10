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
          <Feather name="skip-back" size={30} color="white" style={styles.controlButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
          <Feather name={isPlaying ? "pause" : "play"} size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward}>
          <Feather name="skip-forward" size={30} color="white" style={styles.controlButton} />
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(180, 150, 200, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 50,
  },
});
