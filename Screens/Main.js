import React from "react";
import { View,Text,StyleSheet,Dimensions,Image,ScrollView,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";

const menu =require('../assets/icons/menu.png');
const searchkro =require('../assets/icons/searchkro.png');
const card1= require('../assets/images/music.jpg')
export function Main({navigation}){
    const deviceH = Dimensions.get("screen").height;
    const deviceW = Dimensions.get("screen").width;
    return(
        <View style= {styles.container}>
         <StatusBar style="light" />
         <View style = {styles.subCont}>
            {/* search header start */}
            <View style = {styles.searchHeader}>
            <View style= {[styles.headerItems,{width:'25%'}]}>
            <TouchableOpacity>
                   <Image source= {menu} styles={styles.imgIcons} />
                   </TouchableOpacity>
                </View> 
                <View style= {[styles.headerItems, {width:'150%', gap:10}]}>
                <TouchableOpacity>
                <Image source={searchkro} styles={styles.imgIcons} />
                </TouchableOpacity>
                <View>
                <TouchableOpacity>
                    <Text style ={styles.searchtext}>
                        Search
                    </Text> 
                    </TouchableOpacity>
                </View></View>
                 </View>
                 <Text style={styles.mainHeading}>
                    Trending Right Now</Text>
                   {/* heading text ends*/}
                   {/*  Trending cards start*/}
                    <View>
                    <ScrollView>
                        <View style={styles.card}>
                            <Image source={card1} style={styles.cardImg} />
                            <TouchableOpacity  style={styles.dotIcon}>
                            <Text style={styles.dotFont}>...</Text>
                            </TouchableOpacity>
                            <View style={styles.playbox}>
                            <TouchableOpacity>
                                <View style= {styles.playboxItem}>
                                    <View>
                                        <Text style={styles.musicName}>Faded</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.musicDesc}>🎵  song by Alan Walker</Text>
                                    </View>
                             </View>
                             </TouchableOpacity>
                             </View>
                            </View>        
                    </ScrollView>
                    </View>
                    {/* trending cards end */}
                 </View>
                    
                {/* Search header ends */}
                {/* heading text */}
               
           
    
  {  /* <Text style= {{
                fontSize: 24,
                fontWeight : '900',
            }}>Home Screen</Text>  */}
            
             <Footer navigation={navigation} />
             </View>
             
             ) }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#1C8EAC',
        width: '100%' ,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subCont:{
        height: '100%',
        width : '100%',
        backgroundColor: 'rgba(000,000,000,0.2)',
        padding: 15,
        gap: 20,
    },
    searchHeader:{
        height:35,
        width:'50%',
        marginTop: 45,
        flexDirection: 'row',
        gap: 20, 
    },
    imgIcons:{
        height: 15,
        width: 15,
        tintColor : '#fff',
    },
    headerItems:{
        flexDirection: 'row',
        padding: 9,
        aligncontent: 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(255,255,255,0.2)',
        borderRadius : 10,
    },
    searchtext:{
        fontSize:16,
        color : '#ffff',
        opacity: 0.45,
    },
    mainHeading:{
        fontSize:22,
        color: '#c4c4c4',
        fontWeight: '700'
    },
    card:{
         width:'70%',
         borderRadius:45,
         height: 185,
         resizeMode:'contain',
    },
    cardImg:{
        width:'100%',
        height: 185,
        borderRadius:45,
        resizeMode:'contain'
    },
     dotIcon: {
       position: 'absolute',
       right:22,
    },
   
    dotFont: {
        color: '#fff',
        fontSize:29,
        fontWeight:'600',
    },
    playbox:{
        position: 'absolute',
        zIndex:999,
        bottom:0,
        padding:15,
        width:'100%',
        
    },
    musicName:{
        color:'#FFFEFE',
        fontWeight : '900',
        fontSize:16,
    },
    musicDesc:{
        color:'#FFFEFE',
        fontWeight : '100',
        bottom:1,
        fontSize:12,
       
    },
    playboxItem:{
      //  backgroundColor: 'rgba(61,41,148,0.5)'
      backgroundColor: '#2E1F79',
      height:55,
      width:'100%',
      padding:10,
      borderRadius:15,
    }
    
})