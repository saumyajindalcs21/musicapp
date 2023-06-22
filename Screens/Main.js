import React from "react";
import { View,Text,StyleSheet,Dimensions,Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";

const menu =require('../assets/icons/menu.png');
const searchkro =require('../assets/icons/searchkro.png');
export function Main({navigation}){
    const deviceH = Dimensions.get("screen").height;
    const deviceW = Dimensions.get("screen").width;
    return(
        <View style= {styles.container}>
        
         <StatusBar style="light" />
         <View style = {styles.subCont}>
            {/* search header start */}
            <View style = {styles.searchHeader}>
            <View style= {[styles.headerItems,{width:'35%'}]}>
                   <Image source= {menu} styles={styles.imgIcons} />
                </View>
                <View style= {[styles.headerItems, {width:'150%', gap:10}]}>
                <Image source={searchkro} styles={styles.imgIcons} />
                <View>
                    <Text style ={styles.searchtext}>
                        Search
                    </Text>
                </View>
              
                </View>
                <View>
                    <Text>
                        Trending Right Now
                    </Text>
                </View>

                {/* Search header ends */}
                {/* heading text */}
                <View></View>
            </View>
            </View>
            </View>
    ) }
    { /*  <Text style= {{
                fontSize: 24,
                fontWeight : '900',
            }}>Home Screen</Text> */ }
            
             {/*<Footer navigation={navigation} />*/ }
     
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#7f7eae',
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
    }
})