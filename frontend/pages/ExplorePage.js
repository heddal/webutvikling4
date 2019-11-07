import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from '../components/SearchBox';
import { setPage } from '../actions/SetPageAction';
import { connect } from 'react-redux';

class ExplorePage extends Component {

    componentDidMount(){
        this.props.setPage("Explore")
    }

    render(){
        return(
            <View>
                <SearchBox />
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      setPage: (page) => dispatch(setPage(page)),
    }
  };

export default connect(null, mapDispatchToProps)(ExplorePage);