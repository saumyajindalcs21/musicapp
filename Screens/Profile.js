import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Image, Keyboard } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";
import Song from '../Song';

export function Profile({ navigation }) {
  const songUrls = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/songs%2FBoom%20Boom%20Robo%20Da.mp3?alt=media&token=032d8082-8859-40f3-ae57-b3cefcc6e8d4',
      image: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/picture%20url%2Fzoomzoom.jpg?alt=media&token=04a890b0-bda0-4636-9907-edb6fdd6d294',
      name: 'Boom Boom Roboda',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/songs%2FEnnenno%20Lyrical%20Evaru%20Songs%20Adivi%20Sesh%20Regina%20Cassandra%20Naveen%20Chandra.mp3?alt=media&token=814c3e1a-4acd-4442-a47a-0736641f140e',
      image: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/picture%20url%2Fennenno.jpg?alt=media&token=16320b0d-f167-4087-9f9b-992d50663e20',
      name: 'Ennenno',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/songs%2FSlow%20Version%20Bhulne%20Ke%20Bhul%20Karna%20Nahi%20-%20Kgf%202%20!%20Hindi.mp3?alt=media&token=3eddee5f-8b83-4d1d-b9d0-d11f7e38d688',
      image: 'https://firebasestorage.googleapis.com/v0/b/musicapp-6c355.appspot.com/o/picture%20url%2Fbhuulne.jpg?alt=media&token=76eb8032-500a-4eba-9db0-fbb910d5e953',
      name: 'Bhuulne ki bhool',
    },
  ];

  return (
    <View style={styles.container}>
      <Song songUrls={songUrls} />
      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2C3E50'
  },
});
