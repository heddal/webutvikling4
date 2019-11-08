import React from "react";
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  changeMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
    // this.hideMenu();
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  getUnselectedOptions = () => {
    const new_options = this.props.options.filter(
      (f = (v, i) => {
        return i !== this.props.selected;
      })
    );
    return new_options;
  };

  render() {
    console.log("los returnos -----", this.getUnselectedOptions());

    const items = this.getUnselectedOptions().map((opt, i) => (
      <MenuItem key={i} onPress={this.changeMenu(i)}>
        {opt}
      </MenuItem>
    ));
    return (
      // <View accessibilityRole="header">
      //   <Text> Header </Text>
      //   <View accessibilityRole="menu">
      //     <View accessibilityRole="menuitem">
      //       <Text> YI </Text>
      //       <Text> YI </Text>
      //       <Text> YI </Text>
      //       <Text> YI </Text>
      //     </View>
      //   </View>
      // </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu}>Show {this.props.dropName}</Text>
          }
        >
          <MenuItem
            key={this.props.selected}
            onPress={this.changeMenu(this.props.selected)}
          >
            {this.props.options[this.props.selected]}
          </MenuItem>
          <MenuDivider />
          {items}
        </Menu>
      </View>
    );
  }
}

export default Dropdown;
