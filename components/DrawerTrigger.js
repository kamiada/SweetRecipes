import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {withNavigation} from "react-navigation";
import {DrawerActions} from "react-navigation-drawer";
import Styles from "../styles";

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={Styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Ionicons name={"md-arrow-round-forward"} size={47} color={"grey"} />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(DrawerTrigger);
