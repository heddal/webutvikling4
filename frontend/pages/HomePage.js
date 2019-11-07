import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card'
import Test from '../components/Test'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

class HomePage extends Component{
    render(){
        return(
            <View style={{
                padding: 36,  
                flex: 1,
              }}>
                <Text style={{fontSize: 28, textAlign: "center", padding: 8}}>Welcome to Dream Destinations</Text>
                <Text style={{fontSize: 20, textAlign: "center", padding: 8}}>Click here to see a wordcloud showing the most popular locations</Text>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>Below you see the five most popular places</Text>
                <Card/>
                <Card/>
            </View>
           
            /*
           <Provider store = {store}>
               <Test/>
           </Provider>
           */
        )
    }
}

export default HomePage;