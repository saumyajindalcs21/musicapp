import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Footer } from "../Components/Footer";
export function Search({navigation}){
    return(
        <View style= {styles.container}>
            <Text style= {{
                fontSize: 24,
                fontWeight : '900',
            }}>
        This is my search screen
            </Text>
            <Footer navigation ={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(100, 150, 200, 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });