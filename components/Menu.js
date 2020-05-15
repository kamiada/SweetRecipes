import "react-native-gesture-handler";
import React from "react";
import {Image, Text, View, TouchableOpacity} from "react-native";
import styles from "../styles.js";
import Ellipse from "../assets/Ellipse.png";
import JumpingTitle from "./JumpingTitle";
import ButtonSweet from "./ButtonSweetType";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Image
        source={Ellipse}
        style={{
          width: 322,
          height: 303,
        }}
      />
      <JumpingTitle />
      <ButtonSweet />
    </View>
  );
}
