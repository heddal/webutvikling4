import React, { Component } from 'react';
import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { changeSearchword } from '../actions/SearchAction'

class SearchBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchWord: ""
        }
    }

    search  = ()  => {  
        Keyboard.dismiss()
        if (this.state.searchWord.length === 0){ //search blank, show all places
            word = "All"
        } else {
            word = this.state.searchWord
        }
        this.props.changeSearchword(word)
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
                <TextInput style = {inputfield} autoCorrect = {false} onKeyPress = {(e) => this.handleSearchWord(e)} onSubmitEditing = {() => this.search()} />
                <TouchableWithoutFeedback><Icon name = "search" onPress = {() => this.search()}/></TouchableWithoutFeedback>
            </View>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      changeSearchword: (word) => dispatch(changeSearchword(word))
    }
  };
  
  const mapStateToProps = (state) => { //give us accsess to the data in store
    const filter = state.filter
    return {
      word: filter.searchWord
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);