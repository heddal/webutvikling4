import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Item } from "react-native";
import SearchBox from "../components/SearchBox";
import Card from "../components/Cards/ExploreCard";
import { connect } from "react-redux";
import { changeSearchword } from "../actions/SearchAction";
import "react-navigation";
import Dropdown from "../components/DropdownMenu";
import { changeSelected } from "../actions/DropdownAction";

class ExplorePage extends Component {
  componentDidMount() {
    this.props.changeSearchword("All");
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 50,
        flex: 1,
        backgroundColor: "aliceblue"
      },

      header: {
        fontSize: 28
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Results from "{this.props.word}"</Text>
        <SearchBox />
        <View
          style={{
            flex: 1,
            textAlign: "center"
          }}
        >
          <Dropdown
            selected={this.props.dropdowns[0].index}
            dropName={this.props.dropdowns[0].menuName}
            options={this.props.dropdowns[0].options}
            changeSelected={this.props.changeSelected}
          />
          <Dropdown
            selected={this.props.dropdowns[1].index}
            dropName={this.props.dropdowns[1].menuName}
            options={this.props.dropdowns[1].options}
            changeSelected={this.props.changeSelected}
          />
        </View>
        <Card />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearchword: word => dispatch(changeSearchword(word)),
    changeSelected: (index, menu) => dispatch(changeSelected(index, menu))
  };
};

const mapStateToProps = state => {
  //give us accsess to the data in store
  const filter = state.filter;
  return {
    dropdowns: state.dropdowns,
    word: filter.searchWord
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);
