import React from "react";
import {Text, View, Button} from "react-native";
import styles from "../styles.js";
import Header from "../components/Header";

export default class Recipes2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}></View>
      </React.Fragment>
    );
  }
}
