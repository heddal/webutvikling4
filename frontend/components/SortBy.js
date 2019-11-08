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
      <View>
        <Text onPress={() => Alert.alert("HEI")}>Sort by</Text>

        <View
          style={{
            backgroundColor: "#ff00ff",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Menu
            ref={this.setMenuRef}
            button={<Text onPress={this.showMenu}>Show menu</Text>}
          >
            <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
            <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
            <MenuItem onPress={this.hideMenu} disabled>
              Menu item 3
            </MenuItem>
            <MenuDivider />
            <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
          </Menu>
        </View>
      </View>
    );
  }
}

export default SortBy;
