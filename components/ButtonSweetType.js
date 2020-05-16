import "react-native-gesture-handler";
import React, {Component} from "react";
import Button from "../assets/ExampleButton.png";
import {TouchableOpacity, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function ButtonSweet() {
  return (
    <TouchableOpacity>
      <Image
        source={Button}
        style={{
          width: 80,
          height: 80,
        }}
      />
    </TouchableOpacity>
  );
}
