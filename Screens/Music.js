import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Image, Keyboard } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";
import Song from '../Song';


export function Music({ navigation }) {
  const songUrls = [
   
    {
      url: 'https://pwdown.info/110433/07.%20Mere%20Dholna.mp3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQc72UlQORyB-jLXeaJlPZUCrMSedU4kwrw&usqp=CAU',
      name: 'Mere Dholna',
      singername: 'Shreya Goshal'
    },
    {
      url: 'https://pwdown.info/14671/High%20Rated%20Gabru%20-%20Guru%20Randhawa.mp3',
      image: 'https://www.pagalworld.tv/GpE34Kg9Gq/14671/118539-high-rated-gabru-guru-randhawa-mp3-song-300.jpg',
      name: 'High Rated Gabru',
      singername: 'Guru Randhawa',
    },
    {
      url: 'https://pwdown.info/110745/06.%20Tum%20Dil%20Ki%20Dhadkan%20Mein.mp3',
      image: 'https://www.pagalworld.tv/GpE34Kg9Gq/110745/thumb-dhadkan-300.jpg',
      name: 'Tum Dil Ki Dhadkan Mein',
      singername: 'Dhadkan',
    },
  
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
