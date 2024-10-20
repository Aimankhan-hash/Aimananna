import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  ImageBackground, StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  
  
  
  
  return (
    <>
   
   
   <ImageBackground style={styles.image} resizeMode='Cover' source={
    {
      uri: "https://legacy.react.js.org/logo-og.png"
    }
   }>
<Text style={styles.txt} >Hello world</Text>

   </ImageBackground>
   </>
  );
}

const styles = StyleSheet.create({
  txt: {
  
    backgroundColor: '#fff',
    textAlign: 'center',
   color: '#FFFFFF',
    height: 30,
    fontSize: 22,
  },
  image:{
    flex:1,
    justifyContent: 'center',
  }
});
i