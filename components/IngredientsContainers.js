import React from "react";
import {View, Text} from "react-native";
import styles from "../styles";

class IngredientsContainer extends React.Component {
  render() {
    return (
      <View paddingVertical={10}>
        <View style={styles.title_container}>
          <Text>Ingredients</Text>
        </View>
      </View>
    );
  }
}
export default IngredientsContainer;
