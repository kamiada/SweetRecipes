import React from "react";
import {View, Text, StyleSheet} from "react-native";
import DrawerTrigger from "./DrawerTrigger";
import Styles from "../styles";

class Header extends React.Component {
  render() {
    return (
      <View style={Styles.header}>
        <DrawerTrigger />
      </View>
    );
  }
}

export default Header;
