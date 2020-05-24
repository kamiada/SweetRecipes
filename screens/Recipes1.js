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
import VisualRep from "../components/VisualRep";
import RecipeContainer from "../components/RecipeContainer";
import IngredientsContainer from "../components/IngredientsContainers";
import {Ionicons} from "@expo/vector-icons";
import data from "../exampleData.json";

const convertToArray = (oldArray) => {
  let newArray = [];
  newArray = JSON.parse(oldArray);
  console.log(newArray, "indexes");
  return newArray;
};

const arrayHasIndex = (array, index) => {
  Array.isArray(array) && array.hasOwnProperty(index);
  console.log(array, "array");
  console.log(Array.isArray(array), "is recipes an array?");
};
const generateCurrentRecipe = (recipe) => ({
  index: recipe.index,
  type: recipe.type,
  title: recipe.recipes.name,
  source: recipe.recipes.source,
  ingredients: recipe.recipes.ingredients,
  textRecipe: recipe.recipes.recipe,
  current: true,
});
export default class Recipes1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iterator: 0,
    };
  }
  reloadPage = () => {
    this.props.navigation.push("Recipes_1");
  };
  increaseIterator = () => {
    this.setState({iterator: this.state.iterator + 1});
  };
  decreaseIterator = () => {
    this.setState({iterator: this.state.iterator - 1});
  };
  render() {
    return (
      <React.Fragment>
        {data.map((recipes) => {
          currRecipe = generateCurrentRecipe(recipes);
          const indexes = convertToArray(recipes.index);
          if (currRecipe.index === this.state.iterator) {
            return (
              <React.Fragment>
                <SafeAreaView>
                  <ScrollView>
                    <Header />
                    <View style={styles.container}>
                      <View style={styles.title_container}>
                        <TouchableOpacity
                          onPress={() =>
                            this.state.iterator > 0
                              ? this.decreaseIterator() && this.reloadPage()
                              : []
                          }
                        >
                          <Ionicons
                            name={"md-arrow-dropleft"}
                            size={90}
                            color={"grey"}
                          />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>{currRecipe.title}</Text>
                        {arrayHasIndex(indexes, this.state.iterator + 1) ? (
                          <TouchableOpacity
                            onPress={() =>
                              this.increaseIterator() && this.reloadPage()
                            }
                          >
                            <Ionicons
                              name={"md-arrow-dropright"}
                              size={90}
                              color={"grey"}
                              paddingHorizontal={90}
                            />
                          </TouchableOpacity>
                        ) : (
                          <View>
                            <Text>Doesn't exist</Text>
                          </View>
                        )}
                      </View>
                      {/* if title = Lemon cake, load this pic, else load different pic */}
                      <VisualRep src={require("../Design/lemoncake.png")} />
                      <IngredientsContainer
                        ingredients={currRecipe.ingredients}
                      />
                      <RecipeContainer recipe={currRecipe.textRecipe} />
                      <View>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate("Home")}
                        >
                          <Ionicons
                            name={"md-arrow-round-back"}
                            size={47}
                            color={"grey"}
                          />
                          <Text>Go back</Text>
                        </TouchableOpacity>
                      </View>
                      <Button
                        title="Go to screen 2"
                        onPress={() =>
                          this.props.navigation.navigate("Recipes_2")
                        }
                      />
                    </View>
                  </ScrollView>
                </SafeAreaView>
              </React.Fragment>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
