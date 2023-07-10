import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Footer } from "../Components/Footer";

export function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/profile-img.jpg")} style={styles.profileImage} />
        <Text style={styles.profileName}>Saumya Jindal</Text>
        <Text style={styles.profileInfo}>Singer, Songwriter, App Maker</Text>
        <View style={styles.socialContainer}>
          <Feather name="facebook" size={24} color="white" style={styles.socialIcon} />
          <Feather name="instagram" size={24} color="white" style={styles.socialIcon} />
          <Feather name="twitter" size={24} color="white" style={styles.socialIcon} />
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(150, 150, 150, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileInfo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});
