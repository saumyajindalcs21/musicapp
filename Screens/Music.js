import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Footer } from "../Components/Footer";
export function Music({navigation}){
    return(
        <View style= {styles.container}>
            <Text style= {{
                fontSize: 24,
                fontWeight : '900',
            }}>
        This is your current music screen
            </Text>
            <Footer navigation ={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AED6F1',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });