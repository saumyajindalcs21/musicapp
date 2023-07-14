import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Image, Keyboard } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";

export function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const searchkro = require("../assets/icons/searchkro.png");
  const inputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      // Keyboard is shown, do something if needed
    });

    // When the screen is focused, automatically focus the TextInput
    const unsubscribe = navigation.addListener('focus', () => {
      inputRef.current.focus();
    });

    // Clean up listeners when component unmounts
    return () => {
      keyboardDidShowListener.remove();
      unsubscribe();
    };
  }, [navigation]);

  const handleSearch = () => {
    // Perform search logic based on the searchText
    console.log("Performing search for:", searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={40} color="black" style={styles.searchIcon} />
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
      <Footer navigation={navigation}/>
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
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    flex: 1, // Allow the input to expand and take remaining space
  },

});