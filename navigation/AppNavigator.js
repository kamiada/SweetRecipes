import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/Home";
import Recipes1 from "../screens/Recipes1";
import Recipes2 from "../screens/Recipes2";
import Recipes3 from "../screens/Recipes3";
import DrawerNav from "../navigation/RecipesDrawerNavigator";
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Recipes_1: DrawerNav,
    Recipes_2: Recipes2,
    Recipes_3: Recipes3,
  },
  {
    headerMode: "none",
  }
);
export default createAppContainer(AppNavigator);
