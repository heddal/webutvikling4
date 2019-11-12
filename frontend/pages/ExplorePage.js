import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Item } from 'react-native';
import SearchBox from '../components/SearchBox';
import Card from '../components/Cards/ExploreCard'
import { setPage } from '../actions/SetPageAction';
import { connect } from 'react-redux';
import { changeSearchword } from '../actions/SearchAction';
import 'react-navigation'


class ExplorePage extends Component {

    componentDidMount(){
        this.props.setPage("Explore")
        console.log(this.props.navigation.state.routeName)
        this.props.changeSearchword("All")
    }


    render(){

      this.props.setPage("Explore")
      console.log("EXPLORE: ", this.props.page)

        const styles = StyleSheet.create({
            container: { 
                flexDirection: "column",
                alignItems: "center",
                marginTop: 50,
                flex: 1
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
      setPage: (page) => dispatch(setPage(page)),
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