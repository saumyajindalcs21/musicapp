import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const musicIcon = require("../assets/icons/musicbox.png");
const menu = require("../assets/icons/menu.png");
const searchkro = require("../assets/icons/searchkro.png");
const card1 = require("../assets/images/music.jpg");
const card2 = require("../assets/images/music2.jpg");
const card3 = require("../assets/images/music3.jpg");
const card4 = require("../assets/images/music4.jpg");
const play = require("../assets/images/play.png");
const user = require("../assets/icons/user.png");
const like = require("../assets/icons/like.png");
const filledLike = require("../assets/icons/filled-like.png");

export function Main() {
  const [searchActive, setSearchActive] = useState(false);
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState([false, false, false]);

  const handleLike = (index) => {
    setIsLiked((prevLiked) => {
      const updatedLiked = [...prevLiked];
      updatedLiked[index] = !updatedLiked[index];
      return updatedLiked;
    });
  };

  const handleSearch = () => {
    setSearchActive(true);
    navigation.navigate("Search");
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.subCont}>
        {/* search header start */}
        <TouchableOpacity style={styles.searchHeader} onPress={handleSearch} activeOpacity={0.7}>
          <View style={[styles.headerItems, { width: "13%" }]}>
            <Image source={menu} style={styles.imgIcons} />
          </View>
          <View style={[styles.headerItems, { flexDirection: "row", alignItems: "center", width: "80%", flexDirection: "row", marginRight: 11 }]}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Image source={searchkro} style={styles.imgIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch}>
              <Text style={styles.searchtext}>𝚂𝚎𝚊𝚛𝚌𝚑</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* search header end */}

        <Text style={styles.mainHeading}> TᖇENᗪING ᖇIGᕼT NOᗯ</Text>
        <View style={{ marginBottom: 12 }}></View>
        {/* Trending cards start */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row" }}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>••• </Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>
                        <Image source={musicIcon} style={styles.musicbox} /> song by Alan Walker
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
                      <Feather
                        name={isPlaying ? "pause-circle" : "play-circle"}
                        size={36}
                        color="white"
                        onPress={handlePlayPause}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Rest of the cards */}
          </View>
          <View style={{ marginRight: 12 }}></View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={card2} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>••• </Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Naina Miley</Text>
                      <Text style={styles.musicDesc}>
                        <Image source={musicIcon} style={styles.musicbox} /> Robot
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
                      <Feather
                        name={isPlaying ? "pause-circle" : "play-circle"}
                        size={36}
                        color="white"
                        onPress={handlePlayPause}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Rest of the cards */}
          </View>
        </ScrollView>
        <View style={{ marginBottom:1}}></View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", gap: 15, position: "absolute", zIndex: 999, marginTop: 0 }}
        >
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Devotional Songs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Pop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Classical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Telugu Hits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textcard}>
            <Text style={styles.musicDesc}>Bollywood Masala</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* Trending cards end */}
        <View style={{ marginBottom:2, position: "absolute" }}></View>
        <ScrollView>
          <View style={styles.musicCard}>
            <View style={styles.musicCardCont}>
              <Image source={card2} style={styles.musicImg} />
              <View style={styles.musicBoxDesc}>
                <Text style={styles.musicName}> I'm Good Blue</Text>
                <View style={styles.musicSingerContainer}>
                  <Image source={user} style={styles.musicSinger} />
                  <Text style={styles.musicDesc}>David Gueeta</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleLike(0)}>
              <Image source={isLiked[0] ? filledLike : like} style={styles.likeBtn} />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 9 }}></View>

          <View style={styles.musicCard}>
            <View style={styles.musicCardCont}>
              <Image source={card2} style={styles.musicImg} />
              <View style={styles.musicBoxDesc}>
                <Text style={styles.musicName}> I'm Good Blue</Text>
                <View style={styles.musicSingerContainer}>
                  <Image source={user} style={styles.musicSinger} />
                  <Text style={styles.musicDesc}>David Gueeta</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleLike(1)}>
              <Image source={isLiked[1] ? filledLike : like} style={styles.likeBtn} />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 9 }}></View>

          <View style={styles.musicCard}>
            <View style={styles.musicCardCont}>
              <Image source={card2} style={styles.musicImg} />
              <View style={styles.musicBoxDesc}>
                <Text style={styles.musicName}> I'm Good Blue</Text>
                <View style={styles.musicSingerContainer}>
                  <Image source={user} style={styles.musicSinger} />
                  <Text style={styles.musicDesc}>David Gueeta</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleLike(2)}>
              <Image source={isLiked[2] ? filledLike : like} style={styles.likeBtn} />
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
      {/* Sub container end */}

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles for your components
  container: {
    flex: 1,
    backgroundColor: "#131211",
    alignItems: "center",
    justifyContent: "center",
  },
  subCont: {
    flex: 1,
    width: "100%",
    padding: 15,
  },
  searchHeader: {
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgIcons: {
    height: 15,
    width: 15,
    tintColor: "rgba(255, 255, 255, 0.55)",
  },
  headerItems: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
  },
  searchtext: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.55)",
    opacity: 0.45,
  },
  mainHeading: {
    fontSize: 25,
    color: "rgba(196, 196, 196, 0.8)",
    fontWeight: "800",
  },
  cardContainer: {
    flexDirection: "row",
    gap: 8,
  },
  card: {
    width: 240,
    borderRadius: 45,
    height: 185,
    resizeMode: "contain",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
    resizeMode: "cover",
  },
  dotIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  dotFont: {
    color: "rgba(255, 255, 255, 0.55)",
    fontSize: 29,
    fontWeight: "600",
  },
  playbox: {
    position: "absolute",
    zIndex: 999,
    bottom: 0,
    padding: 15,
    width: "100%",
  },
  musicName: {
    color: "rgba(255, 254, 254, 0.55)",
    fontWeight: "900",
    fontSize: 16,
  },
  musicDesc: {
    color: "rgba(255, 254, 254, 0.55)",
    fontWeight: "100",
    fontSize: 12,
  },
  playboxItem: {
    backgroundColor: "#000000AA",
    height: 55,
    width: "100%",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  musicInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  musicName: {
    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    fontSize: 16,
  },
  musicDesc: {
    color: "rgba(255, 254, 254, 0.55)",
    fontWeight: "900",
    fontSize: 12,
  },
  playButton: {
    marginLeft: 10,
  },
  textcard: {
    backgroundColor: "#4A2B99",
    padding: 5,
    borderRadius: 15,
  },
  musicCard: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#00000000",
    borderRadius: 20,
    height: 77,
    padding: 15,
    marginBottom: 9,
  },
  musicImg: {
    height: 75,
    width: 75,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 10,
  },
  likeBtn: {
    height: 35,
    width: 35,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  musicSingerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  musicSinger: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  musicCardCont: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 20,
  },
  musicBoxDesc: {
    gap: 10,
    alignContent: "center",
    alignItems: "center",
  },
});

export default Main;
