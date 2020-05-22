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
import data from "../exampleData.json";

//find current, prev and next
const generateCurrentRecipe = (recipe) => ({
  index: recipe.index,
  type: recipe.type,
  title: recipe.recipes.name,
  ingredients: recipe.recipes.ingredients,
  textRecipe: recipe.recipes.recipe,
  current: true,
});
//display only current

export default class Recipes1 extends React.Component {
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
        {data.map((recipes) => {
          currRecipe = generateCurrentRecipe(recipes);
          {
            if (currRecipe.index === this.state.iterator) {
              return (
                <React.Fragment>
                  <SafeAreaView>
                    <ScrollView>
                      <Header />
                      <View style={styles.container}>
                        <Pagination title={currRecipe.title} />
                        <VisualRep src={require("../Design/lemoncake.png")} />
                        <IngredientsContainer
                          ingredients={currRecipe.ingredients}
                        />
                        <RecipeContainer recipe={currRecipe.textRecipe} />
                        <View>
                          <Button
                            title="NEXT"
                            onPress={() =>
                              this.setState({
                                iterator: this.state.iterator + 1,
                              }) && this.props.navigation.push("Recipes_1")
                            }
                          ></Button>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("Home")
                            }
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
            } else {
              return (
                <React.Fragment>
                  <View style={styles.container}>
                    <Text>Last one</Text>
                  </View>
                </React.Fragment>
              );
            }
          }
        })}
      </React.Fragment>

      // <React.Fragment>
      //   <SafeAreaView>
      //     <ScrollView>
      //       <Header />
      //       <View style={styles.container}>
      //         <Pagination title={data.recipes.name} />
      //         <VisualRep />
      //         <IngredientsContainer ingredients={data.recipes.ingredients} />
      //         <RecipeContainer recipe={data.recipes.recipe} />
      //         <View>
      //           <TouchableOpacity
      //             onPress={() => this.props.navigation.navigate("Home")}
      //           >
      //             <Ionicons
      //               name={"md-arrow-round-back"}
      //               size={47}
      //               color={"grey"}
      //             />
      //             <Text>Go back</Text>
      //           </TouchableOpacity>
      //         </View>
      //         <Button
      //           title="Go to screen 2"
      //           onPress={() => this.props.navigation.navigate("Recipes_2")}
      //         />
      //       </View>
      //     </ScrollView>
      //   </SafeAreaView>
      // </React.Fragment>
    );
  }
}
