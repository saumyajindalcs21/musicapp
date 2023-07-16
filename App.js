import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Profile } from './Screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from './Screens/Search';
import {Music} from './Screens/Music';
import MusicScreen from './Screens/MusicScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='MusicScreen' component={MusicScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Music' component={Music} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
