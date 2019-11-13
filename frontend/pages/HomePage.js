import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Card from '../components/Cards/HomeCard'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { MaterialDialog } from '../components/Cards/DetailedCard'


const store = createStore(rootReducer, applyMiddleware(thunk))

class HomePage extends Component {

    render(){
        return(
            <View style={{
                paddingTop: 36,  
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: 'aliceblue'
              }}>
                <Text style={{fontSize: 28, textAlign: "center", padding: 8}}>Welcome to Dream Destinations</Text>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>Below you see the five most popular places</Text>
                <Card />
            </View>
        )
    }
}


export default HomePage;