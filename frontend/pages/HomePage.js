import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Card from '../components/Cards/HomeCard'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { setPage } from '../actions/SetPageAction';
import { MaterialDialog } from '../components/Cards/DetailedCard'


const store = createStore(rootReducer, applyMiddleware(thunk))

class HomePage extends Component {

    componentWillMount(){
        this.props.setPage("Home")
    }

    render(){

      
      this.props.setPage("Home")
      console.log("HOME: ", this.props.navigation.state.routeName)
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

const mapDispatchToProps = (dispatch) => {
    return {
      setPage: (page) => dispatch(setPage(page)),
    }
  };

export default connect(null, mapDispatchToProps)(HomePage);