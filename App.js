import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/NavBar";
const Stack = createStackNavigator();
export default function App() {
	return <Menu />;
	// return (
	// 	<NavigationContainer>
	// 		<Stack.Navigator>
	// 			<Stack.Screen
	// 				name="Home"
	// 				component={Menu}
	// 				options={{ title: "Welcome" }}
	// 			/>
	// 			<Stack.Screen name="Profile" component={Navbar} />
	// 		</Stack.Navigator>
	// 	</NavigationContainer>
	// );
}
