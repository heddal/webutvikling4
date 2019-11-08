import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Item } from 'react-native';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card'
import { setPage } from '../actions/SetPageAction';
import { connect } from 'react-redux';
import { changeSearchword } from '../actions/SearchAction';

class ExplorePage extends Component {

    componentDidMount(){
        this.props.setPage("Explore")
        this.props.changeSearchword("All")
    }

    /*_handleLoadMore = () => {
          () => {
            this._fetchAllBeers();
          }
        );
      };*/

    render(){
        const styles = StyleSheet.create({
            container: {
                flexDirection: "column",
                alignItems: "center",
                marginTop: 50
            },

            header: {
                fontSize: 28
            }
        })

        
        var items = [];
        for (var i = 0; i < 30; i++) {
          items.push(<Card/>);
        }


        return(
            <View style = {styles.container}>
                <Text style = {styles.header}> Results from "{this.props.word}"</Text>
                <SearchBox />
    
                <FlatList contentContainerStyle={{
                    width: 300
                }}
                initialNumToRender = {9}
                maxToRenderPerBatch = {2}
                data = {items}
                renderItem = {({ item }) =>
                <Card />}
                />
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