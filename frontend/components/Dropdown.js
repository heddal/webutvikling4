import React from "react";
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { connect } from "react-redux";
import { changeSelected } from "../actions/DropdownAction";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  changeMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
    this.hideMenu();
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  getUnselectedOptions = () => {
    const selected = this.props.selected;
    const new_options = this.props.options.filter(function(v, i) {
      return i !== selected;
    });
    return new_options;
  };

  render() {
    const items = this.getUnselectedOptions().map((opt, i) => (
      <MenuItem key={i} onPress={() => this.changeMenu(i + 1)} disable={false}>
        {opt}
      </MenuItem>
    ));
    const menuItems = this.props.options.map((opt, i) => (
      <MenuItem
        key={i}
        onPress={() => this.changeMenu(i)}
        disable={parseInt(this.props.selected) === parseInt(i)}
      >
        {opt}
      </MenuItem>
    ));
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu}>Show {this.props.dropName}</Text>
          }
        >
          {menuItems}
        </Menu>
      </View>
    );
  }
}

export default Dropdown;
