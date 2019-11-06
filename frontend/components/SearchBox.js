import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class SearchBox extends Component {

    render(){
        const style = {
            backgroundColor: '#EEEEEE',
            margin: 20,
            borderRadius: 10,
            padding: 3

        }

        return(
            <TextInput style = {style}> </TextInput>
        );
    }

}

export default SearchBox;