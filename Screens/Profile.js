import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Footer } from "../Components/Footer";
export function Profile({navigation}){
    return(
        <View style= {styles.container}>
            <Text style= {{
                fontSize: 24,
                fontWeight : '900',
            }}>
        This is my profile screen
            </Text>
            <Footer navigation ={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(150, 150, 150,0.9)',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });