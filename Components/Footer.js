import React from "react";
import { View,Image,StyleSheet,TouchableOpacity } from "react-native";


const homeIcon=require("../assets/icons/home.png");
const searchIcon=require("../assets/icons/search.png");
const musicIcon=require("../assets/icons/music.png");
const profileIcon=require("../assets/icons/user.png");


export function Footer({navigation}){
    return(
        <View style= {styles.container}>
        
       <View style={styles.innerBox}>
       <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
       <Image source= {homeIcon}  style={styles.iconStyle}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
            <Image source= {searchIcon}  style={styles.iconStyle}  /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("Music")}>
            <Image source= {musicIcon}  style={styles.iconStyle}  /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("Profile")} >
            <Image source= {profileIcon}  style={styles.iconStyle} /></TouchableOpacity> 
       
       
        
        </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        backgroundColor : '#FFF0F81A',
        height: 52,
        width: '90%',
       /* margin: 10, */ 
        position: 'absolute',
        bottom: 13,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:22,
        
    },
    innerBox: {
       
    padding: 10,  
    width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconStyle: {
        height: 30,
        resizeMode:'contain',
        width: 30,
        tintColor: '#fff',
    }
 /*  { heading:{
        fontSize:29,
        fontWeight: '900',
    },
    smallText: {
        fontWeight : '100',
        fontSize : 40,
    }   */
})