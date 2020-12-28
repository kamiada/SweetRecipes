import React from "react";
import {Text, View, TouchableOpacity, Button, Image} from "react-native";
import JumpingTitle from "../components/JumpingTitle";
import styles from "../styles.js";

import ButtonDeserts from "../assets/ExampleButton.png";

export default class Home extends React.Component {
  nextScreen = () => {
    this.props.navigation.navigate("Recipes_1");
  };
  screenOfNonCakes = () => {
    this.props.navigation.navigate("Recipes_3");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <View>
            <TouchableOpacity onPress={this.nextScreen}>
              <Image
                source={ButtonDeserts}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity onPress={this.screenOfNonCakes}>
              <Image
                source={ButtonDeserts}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </TouchableOpacity>
          </View> */}
          <View style={styles.centerMe}>
            <JumpingTitle />
          </View>
        </View>
      </View>
    );
  }
}
