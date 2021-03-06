import React from "react";
import {View, Text} from "react-native";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import StackNav from "./AppNavigator";
import DrawerNav from "./RecipesDrawerNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: StackNav,
      Recipes_2: DrawerNav,
      Recipes_3: StackNav,
    },
    {
      initialRouteName: "Home",
    }
  )
);
