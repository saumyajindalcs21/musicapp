import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const musicIcon = require("../assets/icons/musicbox.png");
const menu = require("../assets/icons/menu.png");
const searchkro = require("../assets/icons/searchkro.png");
const card1 ={uri:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'};
const card2 = {uri:'https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg'};
// const play = require("../assets/images/play.png");
const user = require("../assets/icons/user.png");
const like = require("../assets/icons/like.png");
const filledLike = require("../assets/icons/filled-like.png");

export function Main() {
  const [searchActive, setSearchActive] = useState(false);
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState([false, false]); 
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

  const handlePlayPause = (index) => {
    setIsPlaying((prevState) => {
      const updatedPlaying = [...prevState];
      updatedPlaying[index] = !updatedPlaying[index];
      return updatedPlaying;
    });
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
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainHeading}> TᖇENᗪING ᖇIGᕼT NOᗯ</Text>
        <View style={{ marginBottom: 12 }}></View>
        {/* Trending cards start */}
        {/*  */}
          <View style={styles.cardContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row" }}>
            <View style={styles.card}>
              <Image source={ card1 } style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>... </Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>
                        <Image source={musicIcon} style={styles.musicbutton} /> song by Alan Walker
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.playButton} onPress={() => handlePlayPause(0)}>
  <Feather
    name={isPlaying[0] ? "pause-circle" : "play-circle"}
    size={36}
    color="white"
  />
</TouchableOpacity>

                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={card1} style={styles.cardImg} />
              <TouchableOpacity style={styles.dotIcon}>
                <Text style={styles.dotFont}>... </Text>
              </TouchableOpacity>
              <View style={styles.playbox}>
                <TouchableOpacity>
                  <View style={styles.playboxItem}>
                    <View style={styles.musicInfoContainer}>
                      <Text style={styles.musicName}>Faded</Text>
                      <Text style={styles.musicDesc}>
                        <Image source={musicIcon} style={styles.musicbutton} /> song by Alan Walker
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.playButton} onPress={() => handlePlayPause(1)}>
  <Feather
    name={isPlaying[1] ? "pause-circle" : "play-circle"}
    size={36}
    color="white"
  />
</TouchableOpacity>

                  </View>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </View>
          <View style={{ marginBottom: 27 }}></View>
          <View>

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

          
          
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop:49 }}></View>
      <Footer navigation={navigation} />
    </View>
  );
}
// #2C3E50
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
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
    elevation: 20,
    shadowColor:'#fffAA',
    marginRight:15,
  },
  musicbutton:{
    height: 5,
    width: 5,
    tintColor: "#fff",
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
    backgroundColor: "#0048BAAA",
    padding: 5,
    borderRadius:10,
  },
  musicCard: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#00000000",
    borderRadius: 20,
    height: 57,
    padding: 15,
    marginBottom: 19,
  },
  musicImg: {
    height: 55,
    width: 55,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 100,
    marginTop:5
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