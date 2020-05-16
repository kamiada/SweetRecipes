import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import NavigatorSwitch from "./navigation/NavigatorSwitch";

// export default function App() {
//   return <AppNavigator />;
// }

export default function App() {
  return <NavigatorSwitch />;
}
