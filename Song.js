import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const Song = ({ songUrls }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    return () => {
      if (soundObject) {
        soundObject.unloadAsync()
          .catch((error) => {
            console.log('Error unloading sound:', error);
          });
      }
    };
  }, []);

  useEffect(() => {
    loadCurrentSong();
  }, [currentSongIndex]);

  useEffect(() => {
    if (isLoaded && position !== 0 && position === duration) {
      playNextSong();
    }
  }, [position, duration, isLoaded]);

  const loadCurrentSong = async () => {
    try {
      if (soundObject) {
        await soundObject.pauseAsync();
        await soundObject.unloadAsync();
        setIsLoaded(false);
      }

      const { sound, status } = await Audio.Sound.createAsync(
        { uri: songUrls[currentSongIndex].url },
        { shouldPlay: isPlaying },
        onPlaybackStatusUpdate
      );
      setSoundObject(sound);
      setIsPlaying(false);
      setDuration(status.durationMillis);
      setIsLoaded(true);
    } catch (error) {
      console.log('Error loading song:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    setPosition(status.positionMillis);
  };

  const playSong = async () => {
    try {
      if (soundObject) {
        await soundObject.playAsync();
      } else {
        loadCurrentSong();
      }

      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing song:', error);
    }
  };

  const pauseSong = async () => {
    if (soundObject) {
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

  const onSliderValueChange = (value) => {
    setPosition(value);
    if (soundObject) {
      soundObject.setPositionAsync(value);
    }
  };

  const onSliderSlidingComplete = async (value) => {
    setPosition(value);
    if (soundObject) {
      await soundObject.setPositionAsync(value);
      if (isPlaying) {
        await soundObject.playAsync();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: songUrls[currentSongIndex].image }} style={styles.songImage} />
      <Text style={styles.songName}>{songUrls[currentSongIndex].name}</Text>
      <Text style={styles.singername}>{songUrls[currentSongIndex].singername}</Text>
      <View style={{ marginBottom:14 }}></View>
      <Text style={styles.timestampText}>{formatTime(position)}</Text>
      <Text style={styles.durationText}>{formatTime(duration)}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSliderSlidingComplete}
          minimumTrackTintColor="#ff6600"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#ff6600"
        />
        
      </View>
      <View style={{ marginBottom:27 }}></View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={playPreviousSong}>
          <Feather name="skip-back" size={26} color="white" />
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity style={styles.button} onPress={pauseSong}>
            <Feather name="pause" size={29} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={playSong}>
            <Feather name="play" size={29} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={playNextSong}>
          <Feather name="skip-forward" size={26} color="white" />
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
    resizeMode: 'contain',
    borderRadius: 30,
  },
  songName: {
    fontSize: 22,
    fontWeight: "900",
    color: '#ff6600',
    marginBottom: 5,
    textDecorationLine: 'none',
  },
  singername: {
    color: "rgba(255, 254, 254, 0.55)",
    fontWeight: "100",
    fontSize: 12,
  },
  controls: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#44444433',
    padding: 30,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  sliderContainer: {
    width: '90%',
    height: 40,
    marginTop: 20,
    backgroundColor: '#44444433',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  timestampText: {
    fontSize: 12,
    color: '#ff6600',
    marginBottom:-16,
    marginRight:278
  },
  durationText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: -5,
    marginLeft:278
  },
});

export default Song;
