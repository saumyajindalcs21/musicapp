import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const musicIcon = require("../assets/icons/musicbox.png");
const menu = require("../assets/icons/menu.png");
const searchkro = require("../assets/icons/searchkro.png");
const ucard1 = { uri: 'https://i.ytimg.com/vi/5bKSaK94Z4A/maxresdefault.jpg' };
const ucard2 = { uri: 'https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2022/08/Satyaprem-Ki-Katha-Movie-1.jpg?w=1280&ssl=1' };
const lcard1 = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/14671/118539-high-rated-gabru-guru-randhawa-mp3-song-300.jpg' };
const lcard2 = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/110745/thumb-dhadkan-300.jpg' };
const lcard3 = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/113560/148454-komuram-bheemudo-rrr-hindi-mp3-song-300.jpg' };
const lcard4 = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/14156/thumb-emraan-hashmi-all-hit-mp3-songs-300.jpg' };
const lcard5 = { uri: 'https://www.pagalworld.tv/GpE34Kg9Gq/12983/thumb-tubelight-2017-hindi-mp3-songs11-300.jpg' };
const lcard6 = { uri: 'https://www.pagalworld.link/GpE34Kg9Gq/111724/thumb-khilona-1970-300.jpg' };

const user = require("../assets/icons/user.png");
const like = require("../assets/icons/like.png");
const filledLike = require("../assets/icons/filled-like.png");
const umn1 = 'Mere Dholna';
const umn2 = 'Pasoori Nu';
const lmn1 = '      High Rated Gabru';
const lmn2 = '              Tum Dil Ki Dhadkan';
const lmn3 = 'Komuram bheemudo ';
const lmn4 = 'Zara Sa';
const lmn5 = 'Naach meri Jaan';
const lmn6 = 'Khilona Jaan Kar';
const singnm = 'Unknown';

export function Main() {
  const [searchActive, setSearchActive] = useState(false);
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState([false, false]);
  const [isLiked, setIsLiked] = useState([false, false, false]);

  const tcard1 = () => {
    // Navigate to the music screen
    navigation.navigate('Screen1');
  };
 const tcard2=()=> {
  navigation.navigate('Screen2');
 };
 const dcard1=()=> {
  navigation.navigate('Screen3');
 }
 const dcard2=()=> {
  navigation.navigate('Screen4');
 }
 const dcard3=()=> {
  navigation.navigate('Screen5');
 }
 const dcard4=()=> {
  navigation.navigate('Screen6');
 }
 const dcard5=()=> {
  navigation.navigate('Screen7');
 }
 const dcard6=()=> {
  navigation.navigate('Screen8');
 }

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
              <Text style={styles.searchtext}>Search</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* search header end */}
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
          <Text style={styles.mainHeading}> 𝗧𝗿𝗲𝗻𝗱𝗶𝗻𝗴 𝗥𝗶𝗴𝗵𝘁 𝗡𝗼𝘄</Text>
          <View style={{ marginBottom: 7 }}></View>
          {/* Trending cards start */}
          {/*  */}
          <View style={styles.cardContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row" }}>
              <View style={styles.card}>
                <Image source={ucard1} style={styles.cardImg} />
                <TouchableOpacity style={styles.dotIcon}>
                  <Text style={styles.dotFont}>... </Text>
                </TouchableOpacity>
                <View style={styles.playbox}>
                  <TouchableOpacity>
                    <View style={styles.playboxItem}>
                      <View style={styles.musicInfoContainer}>
                        <Text style={styles.musicName}>{umn1}</Text>
                        <Text style={styles.musicDesc}>
                          <Image source={musicIcon} style={styles.musicbutton} /> {singnm}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.playButton} onPress= {tcard1}>
                        <Feather
                          name={"play-circle"}
                          size={36}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.card}>
                <Image source={ucard2} style={styles.cardImg} />
                <TouchableOpacity style={styles.dotIcon}>
                  <Text style={styles.dotFont}>... </Text>
                </TouchableOpacity>
                <View style={styles.playbox}>
                  <TouchableOpacity>
                    <View style={styles.playboxItem}>
                      <View style={styles.musicInfoContainer}>
                        <Text style={styles.musicName}>{umn2}</Text>
                        <Text style={styles.musicDesc}>
                          <Image source={musicIcon} style={styles.musicbutton} /> {singnm}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.playButton} onPress={tcard2}>
                        <Feather
                          name={"play-circle"}
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
          <View style={{marginBottom:17}}></View>
          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row" }}>
              
              <Text style={styles.last}> Devotional </Text> 
              <Text style={styles.last}> Rocking </Text>
              <Text style={styles.last}> Classical </Text>
              <Text style={styles.last}> Jazz </Text>
              <Text style={styles.last}> Party </Text>
              <Text style={styles.last}> Tollywood Pearls </Text>
              <Text style={styles.last}> Bollywood Mashup </Text>
              </ScrollView>
            </View>
          <View style={{ marginBottom: 17}}></View>
          <View>
            <TouchableOpacity onPress={dcard1}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard1} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:89,}}>{lmn1}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(0)}style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[0] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>

            <TouchableOpacity onPress={dcard2}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard2} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:102,}}>{lmn2}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(1)}style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[1] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>

            <TouchableOpacity onPress={dcard3}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard3} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:64,}}>{lmn3}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(2)}style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[2] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>

            <TouchableOpacity onPress={dcard4}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard4} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:110,}}>{lmn4}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(3)}style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[3] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>

            <TouchableOpacity onPress={dcard5}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard5} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:77,}}>{lmn5}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(4)} style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[4] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>

            <TouchableOpacity onPress={dcard6}>
              <View style={styles.musicCard}>
                <View style={styles.musicCardCont}>
                  <Image source={lcard6} style={styles.musicImg} />
                  <View style={styles.musicBoxDesc}>
                    <Text style={{    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:78,}}>{lmn6}</Text>
                    <View style={styles.musicSingerContainer}>
                      <Image source={user} style={styles.musicSinger} />
                      <Text style={styles.Singer}>{singnm}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleLike(5)} style={{right:115,bottom:2}}>
                  <Image
                    source={isLiked[5] ? filledLike : like}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 9 }}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop: 49 }}></View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    justifyContent: "center",
  },
  last:{
    backgroundColor: "#faa05e8c",
    borderRadius:10,
    color:'rgba(255, 254, 254, 0.9)',
    flex:1,
    marginRight:10,
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
  Name:{
    color: "rgba(255, 254, 254, 0.9)",
    fontWeight: "900",
    color:'orange',
    fontSize: 16,
    marginRight:'30%',
    right:62,
  },
  Singer:{
    color: "rgba(255, 254, 254, 0.9)",
    fontSize: 12,
    right:12,
    marginRight:'80%',
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
    shadowColor: '#fffAA',
    marginRight: 15,
  },
  musicbutton: {
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
    backgroundColor: "black",
    height: 55,
    width: "100%",
    padding: 10,
    borderRadius: 25,
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
    borderRadius: 10,
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
    marginTop: 5
  },
  likeBtn: {
    height: 35,
    width: 35,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  musicSingerContainer: {
    flexDirection: 'row',
    gap: 17,
  },
  musicSinger: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
    tintColor: '#fff',
    position:'relative'
    
    
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