import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import { connect } from "react-redux";
import { continentFilter } from "../actions/ContinentAction";
import { sortBy } from "../actions/SortingActions";

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  changeMenu = index => {
    this.props.changeSelected(index, this.props.dropName);
    this.hideMenu();
    if (this.props.dropName === "Continent") {
      this.props.continentFilter(index);
    } else if (this.props.dropName === "Sort") {
      this.props.sortBy(index);
    }
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    const styles = StyleSheet.create({
      menuContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        marginHorizontal: 45,
        backgroundColor: "rgba(63, 81, 181, .5)",
        borderRadius: 7
      }
    });
    // mapping over the different options in the menu and making an menuitem for each
    // it will be displayed in the menu further down.
    const menuItems = this.props.options.map((opt, i) => (
      <MenuItem
        key={i}
        onPress={() => this.changeMenu(opt, i)}
        disable={parseInt(this.props.selected) === parseInt(i)}
      >
        {opt}
      </MenuItem>
    ));
    return (
      <View style={styles.menuContainer}>
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

const mapDispatchToProps = dispatch => {
  return {
    sortBy: type => dispatch(sortBy(type)),
    continentFilter: continent => dispatch(continentFilter(continent))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
