import React from "react";
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { connect } from "react-redux";
import { changeSelected } from "../actions/DropdownAction";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    // console.log("This is ref::::: ", ref.state);
    // ref.show();
    // console.log("This is hide::::: ", ref.state);
    this._menu = ref;
  };

  returnsTrue = () => {
    return true;
  };

  changeMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
    console.log("CHANGE_SELECTED");
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
    console.log(selected);
    const new_options = this.props.options.filter(function(v, i) {
      return i !== selected;
    });
    return new_options;
  };

  render() {
    console.log("los returnos -----", this.getUnselectedOptions());

    const items = this.getUnselectedOptions().map((opt, i) => (
      <MenuItem key={i} onPress={i => this.changeMenu(i)}>
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
            onPress={() => this.changeMenu(this.props.selected)}
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

const mapDispatchToProps = dispatch => {
  return {
    changeSelected
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
