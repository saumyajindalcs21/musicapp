import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import songsList from './SongsList'; 
import { useNavigation } from "@react-navigation/native";
const back = require('../assets/images/back.png');
export function Search({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);
  const backn = () => {
    navigation.navigate('Home');
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      // Keyboard is shown, do something if needed
    });

    const unsubscribe = navigation.addListener('focus', () => {
      inputRef.current.focus();
    });

    return () => {
      keyboardDidShowListener.remove();
      unsubscribe();
    };
  }, [navigation]);

  const handleSearch = () => {
    console.log('Performing search for:', searchText);

    const foundSong = songsList.find((song) => {
      const songNameLower = song.name.toLowerCase();
      const searchTextLower = searchText.toLowerCase();

      for (let i = 0; i <= songNameLower.length - 3; i++) {
        if (songNameLower.startsWith(searchTextLower, i)) {
          return true;
        }
      }
      return false;
    });

    if (foundSong) {
      navigation.navigate(foundSong.screen);
    } else {
      console.log('Song not found.');
      // Implement logic for displaying a message or taking action if the song is not found.
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <TouchableOpacity onPress={backn}>
        <Image source={back} size={15} color="blue" style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={styles.searchInput}
          placeholder="Enter song name"
          autoFocus={true}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
    height:45,
    width:40,
    borderRadius: 10,
    tintColor:'black',
    backgroundColor:'rgba(255, 254, 254, 0.9)'
  },
  searchInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    flex: 1,
  },
});

export default Search;
