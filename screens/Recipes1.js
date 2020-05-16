import React from "react";
import {Text, View, Button} from "react-native";
import ScreenName from "../components/ScreenName";

export default class Recipes1 extends React.Component {
  render() {
    return (
      <View>
        <Text>Screen Recipes</Text>
        <ScreenName name={"Recipes_1"} />
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
