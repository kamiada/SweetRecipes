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
  return newArray;
};

const arrayHasIndex = (array, index) => {
  Array.isArray(array) && array.hasOwnProperty(index);
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
  increaseIterator = ( arrLength ) => {
    console.log('before', arrLength);
    console.log('before2', this.state.iterator);
    if(this.state.iterator === arrLength){
      console.log(this.state.iterator, 'iterator is equal length of data');
      this.setState({iterator: 0})
    };
    this.setState({iterator: this.state.iterator + 1})
  };
  decreaseIterator = () => {
    this.setState({iterator: this.state.iterator - 1});
  };
  render() {
    return (
      <React.Fragment>
        {data.map((recipes) => {
          currRecipe = generateCurrentRecipe(recipes);
          {
            /* const indexes = convertToArray(recipes.index); */
          }
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
                              : 0
                          }
                        >
                          <Ionicons
                            name={"md-arrow-dropleft"}
                            size={90}
                            color={"grey"}
                          />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>{currRecipe.title}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            this.increaseIterator(4) && this.reloadPage()
                          }
                        >
                          <Ionicons
                            name={"md-arrow-dropright"}
                            size={90}
                            color={"grey"}
                            paddingHorizontal={90}
                          />
                        </TouchableOpacity>
                      </View>





                      {/* if title = Lemon cake, load this pic, else load different pic */}
                      {currRecipe.title === "Strewberry Cake" ? (
                        <VisualRep src={require("../Design/tarte.png")} />
                      ) : (
                        <VisualRep src={require("../Design/lemoncake.png")} />
                      )}
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
