import "react-native-gesture-handler";
import React from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./components/Menu";
import Navbar from "./components/NavBar";

function TestScreen1({navigation}) {
  return (
    <>
      <Menu />
      <Button title="test" onPress={() => navigation.navigate("Screen2")} />
    </>
  );
}
function TestScreen2({navigation}) {
  return (
    <>
      <Navbar />
      <Button title="test2" onPress={() => navigation.goBack()} />
    </>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={TestScreen1} />
        <Stack.Screen name="Screen2" component={TestScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
