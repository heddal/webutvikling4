import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from '../components/SearchBox'
import ContinentDropDown from '../components/ContinentDD'

class ExplorePage extends Component {
    render(){
        return(
            <View>
                <SearchBox />
                <ContinentDropDown />
            </View>
        )
    }
}

export default ExplorePage;