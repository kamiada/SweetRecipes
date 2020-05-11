import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, Text } from "react-native";
import styles from "../styles.js";

class JumpingTitle extends Component {
	handleViewRef = (ref) => (this.view = ref);

	bounce = () =>
		this.view
			.bounce(800)
			.then((endState) =>
				console.log(endState.finished ? "bounce finished" : "bounce cancelled")
			);

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={this.bounce}
				style={{ position: "absolute" }}
			>
				<Animatable.View
					ref={this.handleViewRef}
					style={{ position: "absolute" }}
				>
					<Text style={styles.titles}>hello!</Text>
				</Animatable.View>
			</TouchableWithoutFeedback>
		);
	}
}
export default JumpingTitle;
