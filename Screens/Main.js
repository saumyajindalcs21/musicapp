import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../Components/Footer";
export function Main(){
    return(
        <View style= {styles.container}>
         {/*   <Text style={styles.heading}>This is my main Screen</Text> */ }
         <StatusBar style="auto" />
         <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#fff',
        width: '100%' ,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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