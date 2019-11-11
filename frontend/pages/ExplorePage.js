import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../components/SearchBox";
import SortBy from "../components/SortBy";
import { setPage } from "../actions/SetPageAction";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";

class ExplorePage extends Component {
  componentDidMount() {
    this.props.setPage("Explore");
  }

  render() {
    return (
      <View>
        <SearchBox />
        <SortBy />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: page => dispatch(setPage(page))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ExplorePage);
