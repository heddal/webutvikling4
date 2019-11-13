import React from "react";
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { connect } from "react-redux";
import { changeSelected } from "../actions/DropdownAction";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
<<<<<<< HEAD
=======
    // console.log("This is ref::::: ", ref.state);
    // ref.show();
    // console.log("This is hide::::: ", ref.state);
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    this._menu = ref;
  };

  changeMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
<<<<<<< HEAD
=======
    console.log("CHANGE_SELECTED");
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
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
<<<<<<< HEAD
=======
    console.log(selected);
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    const new_options = this.props.options.filter(function(v, i) {
      return i !== selected;
    });
    return new_options;
  };

  render() {
<<<<<<< HEAD
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
=======
    console.log("los returnos -----", this.getUnselectedOptions());

    const items = this.getUnselectedOptions().map((opt, i) => (
      <MenuItem key={i} onPress={i => this.changeMenu(i)}>
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
        {opt}
      </MenuItem>
    ));
    return (
<<<<<<< HEAD
=======
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
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu}>Show {this.props.dropName}</Text>
          }
        >
<<<<<<< HEAD
          {menuItems}
=======
          <MenuItem
            key={this.props.selected}
            onPress={() => this.changeMenu(this.props.selected)}
          >
            {this.props.options[this.props.selected]}
          </MenuItem>
          <MenuDivider />
          {items}
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
        </Menu>
      </View>
    );
  }
}

<<<<<<< HEAD
export default Dropdown;
=======
const mapDispatchToProps = dispatch => {
  return {
    changeSelected
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
