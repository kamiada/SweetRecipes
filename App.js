import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
