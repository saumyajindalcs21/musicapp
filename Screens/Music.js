import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Image, Keyboard } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";
import Song from '../Song';


export function Music({ navigation }) {
  const songUrls = [
   

  
    {
      url: 'https://pwdown.info/113198/09.%20Saat%20Samundar%20Paar.mp3',
      image: 'https://www.pagalworld.tv/GpE34Kg9Gq/113198/thumb-vishwatma-300.jpg',
      name: 'Saat Samundar Paar',
      singername: 'Vishwatma',
    },
    {
      url: 'https://pwdown.info/112876/05.%20Tu%20Pagal%20Prem%20Awara.mp3',
      image: 'https://www.pagalworld.tv/GpE34Kg9Gq/112876/thumb-shola-aur-shabnam-300.jpg',
      name: 'Tu Pagal Prem Awara',
      singername: 'Shola Aur Shabnam',
    },
    {
      url: 'https://pwdown.info/111986/05.%20Dil%20Deewana%20-%20Female.mp3',
      image: 'https://images.news18.com/ibnkhabar/uploads/2021/12/Untitled-design-9-22.jpg?im=Resize,width=540,aspect=fit,type=normal',
      name: 'Dil Deewana',
      singername: 'maine pyaar kiya',
    },
    {
      url: 'https://pwdown.info/7211/08%20Chingari%20Koi%20Bhadke.mp3',
      image: 'https://i.ibb.co/Xx3GdsC/rajesh-khanna-songs.webp',
      name: 'Chingari Koi Bhadke',
      singername: 'Rajesh Khanna',
    },
    {
      url: ' ',
      image: ' ',
      name: 'No more Songs',
      singername: ' ',
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
