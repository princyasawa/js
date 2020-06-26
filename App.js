import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

const instructor = Platform.select({
     ios: 'Press Cmd +R to reload, \n' + 
     'Cmd+D or shake for dev menu',
     android: 'Double tap R on your keyboard to reload, \n' + 
     'Shake or press menu button for dev menu',
});

import {Provider} from "react-redux";
import{ PersistGate} from "redux-persist/integration/react";
import Main from './src/Main';
import persist  from './src/config/store';

const persistStore = persist();

export default function App () {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
      <Main />
      </PersistGate>
       
      </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
