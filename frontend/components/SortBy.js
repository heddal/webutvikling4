import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

class SortBy extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text onPress={() => Alert.alert("This is a test alert")}>Sort by</Text>

        <View
          style={{
            backgroundColor: "#ff00ff"
          }}
        >
          <Menu
            ref={this.setMenuRef}
            button={<Text onPress={this.showMenu}>Show menu</Text>}
          >
            <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
            <MenuItem onPress={this.hideMenu} disabled>
              Menu item 3
            </MenuItem>
          </Menu>
        </View>
      </View>
    );
  }
}

export default SortBy;
