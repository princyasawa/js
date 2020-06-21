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

export default class SignUp extends Component<{}> {
  // can you tell me <{}> why u I wa following a youtube tutorial... okay
  // where is it beign renderederedre I don't know :( okay
    render(){
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor= "#1c313a"
      barStyle= "light-content"/>
      <Logo/>
      <Form type="Signup" />
      <View style={styles.signUpTextCont}>
        <Text style={styles.signUptext}>Already have an account?  </Text>
        <Text style={styles.signUp}>Sign In</Text>
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