import React, { Component } from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    TouchableOpacity,
    Alert 
} from 'react-native';

export default class Logo extends Component<{}> {
  render(){
  return (
      <View style={styles.container}>
    <Image  style={{width:60, height: 100}}
          			source={require('../images/logo.png')}/>
     <Text style={styles.logoText}>My App</Text>
                      </View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    logoText : {
        fontSize:18,
    }
  });