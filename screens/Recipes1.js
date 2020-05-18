import React from "react";
import {TouchableOpacity, View, Button, Text} from "react-native";
import styles from "../styles.js";
import Header from "../components/Header";
import TitleHeader from "../components/TitleHeader";
import VisualRep from "../components/VisualRep";
import RecipeContainer from "../components/RecipeContainer";
import IngredientsContainer from "../components/IngredientsContainers";
import {Ionicons} from "@expo/vector-icons";

export default class Recipes1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <TitleHeader title={"Lemon Cake"} />
          <VisualRep />
          <IngredientsContainer />
          <RecipeContainer />
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Ionicons name={"md-arrow-round-back"} size={47} color={"grey"} />
              <Text>Go back</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Go to screen 2"
            onPress={() => this.props.navigation.navigate("Recipes_2")}
          />
        </View>
      </React.Fragment>
    );
  }
}
