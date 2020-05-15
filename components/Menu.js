import React from "react";
import {Image, Text, View} from "react-native";
import styles from "../styles.js";
import Ellipse from "../assets/Ellipse.png";
import JumpingTitle from "./JumpingTitle";
import ButtonSweetType from "./ButtonSweetType";

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
      <ButtonSweetType />
    </View>
  );
}
