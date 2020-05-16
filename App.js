import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/Home";
import Recipes_1 from "./screens/Recipes1";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Recipes_1: Recipes_1,
//   },
//   {
//     headerMode: "none",
//   }
// );
// export default createAppContainer(AppNavigator);
export default function App() {
  return <AppNavigator />;
}
