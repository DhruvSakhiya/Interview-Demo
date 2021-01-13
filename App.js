/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/Routes';


const App = ({navigation}) => {
  
  return (
        <Routes navigation={navigation}/>  
  );
};

export default App;
