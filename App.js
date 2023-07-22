import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Profile } from './Screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from './Screens/Search';
import {Music} from './Screens/Music';
import Screen1 from './Screens/MusicScreen1';
import Screen2 from './Screens/MusicScreen2';
import Screen3 from './Screens/MusicScreen3';
import Screen4 from './Screens/MusicScreen4';
import Screen5 from './Screens/MusicScreen5';
import Screen6 from './Screens/MusicScreen6';
import Screen7 from './Screens/MusicScreen7';
import Screen8 from './Screens/MusicScreen8';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name='Screen2' component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name='Screen3' component={Screen3} options={{ headerShown: false }} />
        <Stack.Screen name='Screen4' component={Screen4} options={{ headerShown: false }} />
        <Stack.Screen name='Screen5' component={Screen5} options={{ headerShown: false }} />
        <Stack.Screen name='Screen6' component={Screen6} options={{ headerShown: false }} />
        <Stack.Screen name='Screen7' component={Screen7} options={{ headerShown: false }} />
        <Stack.Screen name='Screen8' component={Screen8} options={{ headerShown: false }} />
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
