import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Profile } from './Screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Main />
     {/* <Profile /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
