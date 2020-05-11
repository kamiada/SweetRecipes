import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import Button from "../assets/ExampleButton.png";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles.js";

class ButtonSweetType extends Component {
	onPress = () => setCount((prevCount) => prevCount + 1);
	render() {
		return (
			<TouchableOpacity
				style={styles.iconStyle}
				onPress={onPress}
			></TouchableOpacity>
		);
	}
}

export default ButtonSweetType;
