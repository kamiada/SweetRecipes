import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/Home";
import Recipes1 from "../screens/Recipes1";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Recipes_1: Recipes1,
  },
  {
    headerMode: "none",
  }
);
export default createAppContainer(AppNavigator);
