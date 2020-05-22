import React from "react";
import {
  TouchableOpacity,
  View,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "../styles.js";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import VisualRep from "../components/VisualRep";
import RecipeContainer from "../components/RecipeContainer";
import IngredientsContainer from "../components/IngredientsContainers";
import {Ionicons} from "@expo/vector-icons";
import dataArray from "../exampleData.json";
import {getAppLoadingLifecycleEmitter} from "expo/build/launch/AppLoading";

//When I open a page I want by default see first recipe in the array of them.
//When I will click button Next, I want to see a recipe which is current_index+1
//When I will click button Previous, I want to see recipe which is

//FUNCTION WHICH CALLS ONE OBJECT AT TIME FROM DATAARRAY
const fetchRecipe = (array, req, index) => {
  req = 0;
  array.index[req] + 1 ? loadFile() : array.index[req];
};

const generateCurrentRecipe = (recipe) => ({
  index: recipe.index,
  type: recipe.type,
  title: recipe.recipes.name,
  ingredients: recipe.recipes.ingredients,
  textRecipe: recipe.recipes.recipe,
  current: true,
});

export default class Recipes2 extends React.Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      iterator: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        {dataArray.map((recipes) => {
          {
            currentRecipe = generateCurrentRecipe(recipes);

            {
              if (currentRecipe.index === this.state.iterator) {
                return (
                  <React.Fragment>
                    <SafeAreaView>
                      <ScrollView>
                        <Header />
                        <View style={styles.container}>
                          <Pagination title={currentRecipe.title} />
                          <Button
                            title="Iterate +1 - NEXT"
                            onPress={() =>
                              this.setState({
                                iterator: this.state.iterator + 1,
                              }) && this.props.navigation.push("Recipes_2")
                            }
                          ></Button>
                        </View>
                      </ScrollView>
                    </SafeAreaView>
                  </React.Fragment>
                );
              } else {
                return [];
              }
            }
          }
        })}
      </React.Fragment>
    );
  }
}
