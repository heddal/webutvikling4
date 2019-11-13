import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { changeSearchword } from "../actions/SearchAction";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ""
    };
  }

<<<<<<< HEAD
  search = () => {
    Keyboard.dismiss();
    if (this.state.searchWord.length === 0) {
      //search blank, show all places
      word = "all";
    } else {
      word = this.state.searchWord;
=======
    constructor(props){
        super(props)
        this.state = {
            searchWord: ""
        }
    }

    search  = ()  => {
        if (this.state.searchWord.length === 0){ //search blank, show all places
            word = "all"
        } else {
            word = this.state.searchWord
        }
        this.props.changeSearchword(word.toLowerCase())
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    }
    this.props.changeSearchword(word.toLowerCase());
  };

  handleSearchWord = e => {
    var word = this.state.searchWord;
    if (e.nativeEvent.key !== "Backspace") {
      word += e.nativeEvent.key;
    } else if (this.state.searchWord.length !== 0) {
      word = this.state.searchWord.substr(0, this.state.searchWord.length - 1);
    } else {
      console.log("Ikke no å slette");
    }
    this.setState({ searchWord: word });
    console.log(word);
  };

<<<<<<< HEAD
  render() {
    this.search = this.search.bind(this);
    this.handleSearchWord = this.handleSearchWord.bind(this);
    const inputfield = {
      backgroundColor: "#EEEEEE",
      borderRadius: 10,
      padding: 3,
      flex: 1
    };

    return (
      <View style={{ flexDirection: "row", margin: 20 }}>
        <TextInput
          style={inputfield}
          autoCorrect={false}
          onKeyPress={e => this.handleSearchWord(e)}
          onSubmitEditing={() => this.search()}
        />
        <TouchableWithoutFeedback>
          <Icon name="search" onPress={() => this.search()} />
        </TouchableWithoutFeedback>
        <Text> {this.props.word} </Text>
      </View>
    );
  }
=======
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
                <TextInput
                  style = {inputfield}
                  autoCorrect = {false}
                  onKeyPress = {(e) => this.handleSearchWord(e)}
                  onSubmitEditing = {() => this.search()}
                />
                <Icon
                  name = "search"
                  onPress = {() => this.search()}
                />
                <Text>
                  {this.props.word}
                </Text>
            </View>
        );
    }
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearchword: word => dispatch(changeSearchword(word))
  };
<<<<<<< HEAD
};

const mapStateToProps = state => {
  //give us accsess to the data in store
  const filter = state.filter;
  return {
    word: filter.searchWord
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
=======

  const mapStateToProps = (state) => { //give us accsess to the data in store
    const filter = state.filter
    return {
      word: filter.searchWord
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
