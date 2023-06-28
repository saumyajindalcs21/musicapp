import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";

const menu = require('../assets/icons/menu.png');
const searchkro = require('../assets/icons/searchkro.png');
const card1 = require('../assets/images/music.jpg');
const play = require('../assets/images/play.png');

export function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.subCont}>
        {/* search header start */}
        <View style={styles.searchHeader}>
          <View style={[styles.headerItems, { width: '13%' }]}>
            <TouchableOpacity>
              <Image source={menu} style={styles.imgIcons} />
            </TouchableOpacity>
          </View>
          <View style={[styles.headerItems, { flexDirection: 'row', alignItems: 'center', width: '80%', flexDirection: 'row', marginRight: 11 }]}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Image source={searchkro} style={styles.imgIcons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.searchtext}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* search header end */}

        <Text style={styles.mainHeading}> Trending Right Now</Text>
        <View style={{ marginBottom: 10 }}></View>
        {/* Trending cards start */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>...</Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>🎵 song by Alan Walker</Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                      <Image source={play} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>...</Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>🎵 song by Alan Walker</Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                      <Image source={play} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>...</Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>🎵 song by Alan Walker</Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                      <Image source={play} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>...</Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>🎵 song by Alan Walker</Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                      <Image source={play} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>...</Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>🎵 song by Alan Walker</Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                      <Image source={play} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Rest of the cards */}
          </View>
        </ScrollView>
        {/* Trending cards end */}
      </View>
      {/* Sub container end */}

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCont: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  searchHeader: {
    flexDirection: 'row',
    marginTop: 45,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgIcons: {
    height: 15,
    width: 15,
    tintColor: 'rgba(255, 255, 255, 0.55)',
  },
  headerItems: {
    flexDirection: 'row',
    padding:12,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
  searchtext: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.55)',
    opacity: 0.45,
    
  },
  mainHeading: {
    fontSize: 22,
    color: 'rgba(196, 196, 196, 0.55)',
    fontWeight: '700',
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  card: {
    width:240,
    borderRadius: 45,
    height: 185,
    resizeMode: 'contain',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    resizeMode: 'cover',
  },
  dotIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dotFont: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: 29,
    fontWeight: '600',
  },
  playbox: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    padding: 15,
    width: '100%',
  },
  musicName: {
    color: 'rgba(255, 254, 254, 0.55)',
    fontWeight: '900',
    fontSize: 16,
  },
  musicDesc: {
    color: 'rgba(255, 254, 254, 0.55)',
    fontWeight: '100',
    fontSize: 12,
  },
  playboxItem: {
    backgroundColor: 'rgba(46, 31, 121, 0.55)',
    height: 55,
    width: '100%',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  musicName: {
    color: 'rgba(255, 254, 254, 0.6)',
    fontWeight: '900',
    fontSize: 16,
  },
  musicDesc: {
    color: 'rgba(255, 254, 254, 0.55)',
    fontWeight: '100',
    fontSize: 12,
  },
  playButton: {
    marginLeft: 10,
  },
});

export default Main;