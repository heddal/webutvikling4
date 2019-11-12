import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../components/SearchBox";
import SortBy from "../components/SortBy";
import { setPage } from "../actions/SetPageAction";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import { changeSelected } from "../actions/DropdownAction";

class ExplorePage extends Component {
  componentDidMount() {
    this.props.setPage("Explore");
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <SearchBox />
        <Dropdown
          selected={this.props.dropdowns[0].index}
          dropName={this.props.dropdowns[0].menuName}
          options={this.props.dropdowns[0].options}
          changeSelected={this.props.changeSelected}
          
        />
        <Text>hvorfor kommer ikke dropdown?</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: page => dispatch(setPage(page)),
    changeSelected
  };
};
const mapStateToProps = state => {
  return {
    dropdowns: state.dropdowns
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);
