import React from "react";
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
    //this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    const items = this.props.options.map((o, i) => (
      <MenuItem key={i} onPress={this.hideMenu(i)}>
        {o}
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
          {items}
        </Menu>
      </View>
    );
  }
}

export default Dropdown;
