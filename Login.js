import React, { Component } from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Alert 
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> {
  render(){
    return(
    <View style={styles.container}>
      <StatusBar
      backgroundColor= "#1c313a"
      barStyle= "light-content"/>
      <Logo/>
      <Form type="login"/>
      <View style={styles.signUpTextCont}>
        <Text style={styles.signUptext}>Don't have an account yet?  </Text>
        <Text style={styles.signUp}>Signup</Text>
      </View>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpTextCont: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000000",
    marginBottom: 100,
    fontSize: 20,
    flexDirection: "row",
  },
  
  signUptext: {
    fontSize: 16,

  },

  signUp: {
    fontSize: 16,
    fontWeight: "bold"
  } 

});