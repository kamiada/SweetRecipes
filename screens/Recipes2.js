import React from "react";
import {Text, View, Button} from "react-native";
import styles from "../styles.js";

export default class Recipes2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
