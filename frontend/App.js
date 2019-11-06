import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './components/Test';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk)) ;

export default function App() {
  return (
    <Provider store = {store}>
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <View>
          <Test/>
      </View>
    </View>
    </Provider>
    
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
