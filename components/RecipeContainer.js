import React from "react";
import {View, Text} from "react-native";
import styles from "../styles";

class RecipeContainer extends React.Component {
  render() {
    return (
      <View paddingVertical={10}>
        <View style={styles.title_container}>
          <Text>Recipe{this.props.recipe}</Text>
        </View>
      </View>
    );
  }
}
export default RecipeContainer;
