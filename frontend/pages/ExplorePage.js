import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Item } from 'react-native';
import SearchBox from '../components/SearchBox';
import Card from '../components/Cards/ExploreCard'
import { connect } from 'react-redux';
import { changeSearchword } from '../actions/SearchAction';
import 'react-navigation'


class ExplorePage extends Component {

    componentDidMount(){
        this.props.changeSearchword("All")
    }


    render(){
        const styles = StyleSheet.create({
            container: { 
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 50,
                flex: 1,
                backgroundColor: 'aliceblue'
            },

            header: {
                fontSize: 28
            }})

        return(
            <View style = {styles.container}>
              <Text style = {styles.header}> Results from "{this.props.word}"</Text>
              <SearchBox />
              <Card />
            </View>
            
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);