import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const MusicScreen3 = () => {
  const songUrl = 'https://pwdown.info/113622/The%20Monster%20Song%20-%20KGF%202.mp3'; // Replace with your song URL
  const songName = 'Monster Song';
  const singername = 'Adithi Sagar, Ravi Basrur';
  const songimage = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/113622/149377-the-monster-song-kgf-2-mp3-song-300.jpg' };
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
    loadSong();
  }, []);

  useEffect(() => {
    if (isLoaded && position !== 0 && position === duration) {
      pauseSong();
    }
  }, [position, duration, isLoaded]);

  const loadSong = async () => {
    try {
      if (soundObject) {
        await soundObject.pauseAsync();
        await soundObject.unloadAsync();
        setIsLoaded(false);
      }

      const { sound, status } = await Audio.Sound.createAsync(
        { uri: songUrl },
        { shouldPlay: false },
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

  const togglePlayPause = async () => {
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
      <Image source={songimage} style={styles.songImage} />
      <Text style={styles.songName}>{songName}</Text>
      <Text style={styles.singername}>{singername}</Text>
      <View style={{ marginBottom:23 }}></View>
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
        
        {isPlaying ? (
          <TouchableOpacity style={styles.button} onPress={pauseSong}>
            <Feather name="pause" size={29} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={playSong}>
            <Feather name="play" size={29} color="white" />
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2C3E50',
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
    color: 'red',
    marginLeft:280,

  },
});

export default MusicScreen3;
