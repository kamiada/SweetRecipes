import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/Home";
import Recipes1 from "../screens/Recipes1";
import Recipes2 from "../screens/Recipes2";
import DrawerNav from "../navigation/RecipesDrawerNavigator";
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Recipes_1: Recipes1,
    Recipes_2: DrawerNav,
  },
  {
    headerMode: "none",
  }
);
export default createAppContainer(AppNavigator);
