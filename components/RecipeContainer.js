import React from "react";
import {View, Text} from "react-native";
import styles from "../styles";

class RecipeContainer extends React.Component {
  render() {
    return (
      <View paddingVertical={10} paddingHorizontal={20}>
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeText}>{this.props.recipe}</Text>
        </View>
      </View>
    );
  }
}
export default RecipeContainer;
