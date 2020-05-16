import React from "react";
import {Text, View, TouchableOpacity, Button, StyleSheet} from "react-native";
import ScreenName from "../components/ScreenName";
export default class Home extends React.Component {
  nextScreen = () => {
    this.props.navigation.navigate("Recipes_1");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.circle}> */}
        <Text>Home Screen</Text>
        <ScreenName name={"Home"} />
        {/* </View> */}
        <Button title="Move to next screen" onPress={this.nextScreen} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE4E1",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#EDACA7",
    position: "absolute",
    left: -120,
    top: -20,
  },
});
