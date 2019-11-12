import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Card from '../components/Card'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { setPage } from '../actions/SetPageAction';


const store = createStore(rootReducer, applyMiddleware(thunk))

class HomePage extends Component {

    componentWillMount(){
        this.props.setPage("Home")
    }

    render(){
      //this.props.setPage("Home")
        return(
            <View style={{
                paddingTop: 36,  
                flex: 1,
                alignItems: "center"
              }}>
                <Text style={{fontSize: 28, textAlign: "center", padding: 8}}>Welcome to Dream Destinations</Text>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>Below you see the five most popular places</Text>
                <Card />
            </View>
           /*
            
           <Provider store = {store}>
               <Test/>
           </Provider>
           */
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setPage: (page) => dispatch(setPage(page)),
    }
  };

export default connect(null, mapDispatchToProps)(HomePage);