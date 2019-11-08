import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Card from "../components/Card";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { connect } from "react-redux";
import { setPage } from "../actions/SetPageAction";
import { changeSelected } from "../actions/DropdownAction";
import Dropdown from "../components/Dropdown";

const store = createStore(rootReducer, applyMiddleware(thunk));

class HomePage extends Component {
  componentWillMount() {
    this.props.setPage("Home");
  }

  render() {
    return (
      <View
        style={{
          padding: 36,
          flex: 1
        }}
      >
        <Text style={{ fontSize: 28, textAlign: "center", padding: 8 }}>
          Welcome to Dream Destinations
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", padding: 8 }}>
          Click here to see a wordcloud showing the most popular locations
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", padding: 8 }}>
          Below you see the five most popular places
        </Text>
        <Card />
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
      /*

    render(){
        return(
            <ScrollView style={{
                padding: 36,
                flex: 1
              }}>
                <Text style={{fontSize: 28, textAlign: "center", padding: 8}}>Welcome to Dream Destinations</Text>
                <Text style={{fontSize: 20, textAlign: "center", padding: 8}}>Click here to see a wordcloud showing the most popular locations</Text>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>Below you see the five most popular places</Text>
                <Card/>
            </ScrollView>
           /*

           <Provider store = {store}>
               <Test/>
           </Provider>
           */
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
)(HomePage);
