import React from "react";
import {View, Text} from "react-native";
import styles from "../styles";

class IngredientsContainer extends React.Component {
  render() {
    return (
      <View paddingVertical={10} paddingHorizontal={20}>
        <View style={styles.title_container}>
          <Text style={styles.recipeText}>{this.props.ingredients}</Text>
        </View>
      </View>
    );
  }
}
export default IngredientsContainer;
