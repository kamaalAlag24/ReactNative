/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.redCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCircle: {
    width: 200, 
    height: 200, 
    backgroundColor: 'red',
    borderRadius: 100,
  },
});

export default App;
