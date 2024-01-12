import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './src/StartScreen';
import HomeScreen from './src/HomeScreen';

export default function App() {
  const[isLoaded,setIsLoaded]=useState(false);
  setTimeout(()=>{
    setIsLoaded(true)
  },2000);
  
  return (
    <View style={styles.container}>
      {isLoaded?<HomeScreen/>:<StartScreen/>}
      <StatusBar style="auto" />
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
