import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

class SearchBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchWord: ""
        }
    }

    search  = ()  => {
        if (this.state.searchWord.length === 0){
            word = "All"
        } else {
            word = this.state.searchWord
        }
        console.log("HEIDHK", word)
    }

    handleSearchWord = (e) => {
        var word = this.state.searchWord
        if (e.nativeEvent.key !== "Backspace"){
            word += e.nativeEvent.key
        } else if (this.state.searchWord.length !== 0){
            word = this.state.searchWord.substr(0, this.state.searchWord.length -1)
        } else {
            console.log("Ikke no å slette")
        }
        this.setState({ searchWord: word})
        console.log(word)
    }

    render(){
        this.search = this.search.bind(this)
        this.handleSearchWord = this.handleSearchWord.bind(this)
        const inputfield = {
            backgroundColor: '#EEEEEE',
            borderRadius: 10,
            padding: 3,
            flex: 1
        }

        return(
            <View style = {{flexDirection: "row", margin: 20}}>
                <TextInput style = {inputfield} onKeyPress = {(e) => this.handleSearchWord(e)} onSubmitEditing = {() => this.search()} />
                <Icon name = "search" onPress = {() => this.search()}/>
            </View>
        );
    }

}

export default SearchBox;