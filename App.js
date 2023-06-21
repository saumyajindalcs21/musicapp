import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Profile } from './Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Search } from './Screens/Search';
import {Music} from './Screens/Music'
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="auto" />
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Main} options={{headerShown: false}} />
        <stack.Screen name ='Profile' component={Profile} options={{headerShown: false}} />
        <stack.Screen name ='Search' component={Search} options={{headerShown: false}} />
        <stack.Screen name ='Music' component={Music} options={{headerShown: false}} />
      </stack.Navigator>
    
    </NavigationContainer>
   // <View style={styles.container}>

   //   
   //   <Main />
     /* <Profile /> */
   // </View>
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
