import React, { Component } from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Form extends Component<{}> {
    render(){
  return (
      <View style={styles.container}>
     <TextInput style={styles.inputBox}  
     placeholder="Email"
     placeholderTextColor = "#ffffff"
     />
      <TextInput style={styles.inputBox}  
     placeholder="Password"
     secureTextEntry={true}
     placeholderTextColor = "#ffffff"
     />
     <TouchableOpacity>
  <Text style={styles.buttonText}>Submit</Text>
     </TouchableOpacity>
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

    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(46, 49, 49, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20
    },

    buttonText: {
        backgroundColor: "rgba(255,10,10,0.5)",
        width: 300,
        textAlign: 'center',
        color: "#ffffff",
        height: 50,
        paddingTop: 15,
         fontSize: 16,
         fontWeight: "bold",
         borderRadius: 25
    }
  });