import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Footer } from "../Components/Footer";
export function Profile({navigation}){
    return(
        <View style= {styles.container}>
            <Text>
        This is my profile screen
            </Text>
            <Footer navigation ={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });