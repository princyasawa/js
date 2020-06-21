import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

const instructor = Platform.select({
     ios: 'Press Cmd +R to reload, \n' + 
     'Cmd+D or shake for dev menu',
     android: 'Double tap R on your keyboard to reload, \n' + 
     'Shake or press menu button for dev menu',
});

// import Routes from './src/components/Routes'
import Login from './src/pages/Login';
import SignUp from './src/pages/Signup';

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor= "#1c313a"
      barStyle= "light-content"/>
      <SignUp />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
