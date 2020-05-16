import React from "react";
import {Text, View, Button} from "react-native";
import styles from "../styles.js";

export default class Recipes1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to screen 2"
          onPress={() => this.props.navigation.navigate("Recipes_2")}
        />
      </View>
    );
  }
}
