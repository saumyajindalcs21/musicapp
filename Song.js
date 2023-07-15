import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';

const Song = ({ songUrls }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);

  useEffect(() => {
    return () => {
      // Unload the sound object when the component unmounts
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    // Load the current song when the song index changes
    loadCurrentSong();
  }, [currentSongIndex]);

  const loadCurrentSong = async () => {
    try {
      if (soundObject) {
        // Unload the previous sound object if it exists
        await soundObject.unloadAsync();
      }

      // Create a new sound object using Expo Audio
      const { sound } = await Audio.Sound.createAsync(
        { uri: songUrls[currentSongIndex].url },
        { shouldPlay: isPlaying }
      );
      setSoundObject(sound);
    } catch (error) {
      console.log('Error loading song:', error);
    }
  };

  const playSong = async () => {
    try {
      if (soundObject) {
        // If the sound object already exists, resume playback
        await soundObject.playAsync();
      } else {
        // Load the current song if the sound object doesn't exist
        loadCurrentSong();
      }

      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing song:', error);
    }
  };

  const pauseSong = async () => {
    if (soundObject) {
      // Pause the currently playing song
      await soundObject.pauseAsync();
      setIsPlaying(false);
    }
  };

  const playPreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const playNextSong = () => {
    if (currentSongIndex < songUrls.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: songUrls[currentSongIndex].image }} style={styles.songImage} />
      {/* <TouchableOpacity onPress={() => Linking.openURL(songUrls[currentSongIndex].url)}> */}
        <Text style={styles.songName}>{songUrls[currentSongIndex].name}</Text>
      {/* </TouchableOpacity> */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={playPreviousSong}>
          <Feather name="skip-back" size={24} color="white" />
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity style={styles.button} onPress={pauseSong}>
            <Feather name="pause" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={playSong}>
            <Feather name="play" size={24} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={playNextSong}>
          <Feather name="skip-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  songImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode:'contain',
  },
  songName: {
    fontSize: 32,
    color:'#fff',
    marginBottom: 20,
    textDecorationLine: 'none',
  },
  controls: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#444444',
    padding: 30,
    borderRadius: 100,
    marginHorizontal: 10,
  },
});

export default Song;
