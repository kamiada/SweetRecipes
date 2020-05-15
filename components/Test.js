import "react-native-gesture-handler";
import React from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Navbar from "./NavBar";
import {useNavigation} from "@react-navigation/native";

export default function TestScreen2({screenName}) {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <Button title="test2" onPress={() => navigation.navigate(screenName)} />
    </>
  );
}
