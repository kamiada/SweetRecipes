import React from "react";
import {View, Text} from "react-native";
import {createDrawerNavigator} from "react-navigation-drawer";

import Recipes1 from "../screens/Recipes1";
import Recipes2 from "../screens/Recipes2";

const DrawerNavigation = createDrawerNavigator({
  One: Recipes1,
  Two: Recipes2,
});
export default DrawerNavigation;
