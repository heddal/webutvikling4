import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
<<<<<<< HEAD
  Image,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { GetData, UpdatePopulatiry } from "../api/fetchers";
import { ScrollView } from "react-native-gesture-handler";
=======
  Image
} from "react-native";
import { connect } from "react-redux";
import { GetData } from "../api/fetchers";
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8

class Card extends Component {
  state = {
    data: []
  };
<<<<<<< HEAD

  componentWillMount() {
    this.checkPage();
  }

  setData(input) {
    GetData(input).then(res => this.setState({ data: res.data.data }));
=======

  componentDidMount() {
    this.checkPage();
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
  }

  checkPage() {
    if (this.props.page === "Home") {
<<<<<<< HEAD
      this.setData(5);
      if (this.props.page === "Explore") {
        if (this.props.word === "all") {
          if (this.props.continent === "all") {
            this.setData();
          } else {
            this.setData(this.props.continent);
          }
        } else if (this.props.continent === "all") {
          this.setData(this.props.word);
        } else {
          this.setData(this.props.continent + "/" + this.props.word);
        }
      }
=======
      var locations = GetData(5);
      locations.then(data => {
        this.setState({ data: data });
      });
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        borderRadius: 7,
        shadowOffset: {
          width: 0.5,
          height: 0.5
        },
        shadowColor: "#AAAAAA",
        shadowOpacity: 1,
        backgroundColor: "white",
        margin: 10,
        padding: 10,
<<<<<<< HEAD
        alignItems: "center",
        height: 250
      },
      Image: {
        width: 300,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center"
      }
    });
    const { data } = this.state;
    const dataCards = data.map(dat => {
      return (
        <TouchableHighlight
          key={dat._id}
          underlayColor="white"
          onPress={() => Alert.alert("HEI")}
        >
          <View style={styles.container}>
            <View>
              <Image style={styles.Image} source={{ uri: dat.img }} />
            </View>
            <View>
              <Text> {dat.name} </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
    return <ScrollView>{dataCards}</ScrollView>;
=======
        alignItems: "center"
      }
    });
    const { data } = this.state;

    return <View></View>;
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
  }
}

const mapStateToProps = state => {
  //give us accsess to the data in store

  return {
<<<<<<< HEAD
    page: state.page.page,
    word: state.filter.searchWord,
    continent: state.filter.continent
=======
    page: state.page.page
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
  };
};

export default connect(mapStateToProps)(Card);
