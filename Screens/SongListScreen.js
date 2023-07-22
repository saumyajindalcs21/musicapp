import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import songsList from './SongsList'; // Replace with the correct path to the SongsList file

const SongListScreen = ({ navigation }) => {
  const handleSongPress = (songScreen) => {
    navigation.navigate(songScreen);
  };

  
  return (
    <View style={styles.container}>
      <FlatList
        data={songsList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem} onPress={() => handleSongPress(item.screen)}>
            <Text style={styles.songName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    paddingTop: 40,
  },
  songItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  songName: {
    color: 'rgba(255, 254, 254, 0.9)',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default SongListScreen;
