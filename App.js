import "react-native-gesture-handler";
import React from "react";
import {Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./components/Menu";
import ButtonSweet from "./components/ButtonSweetType";
import Test from "./components/Test";

function TestScreen1({navigation}) {
  return (
    <>
      <Menu />
      <Button title="test" onPress={() => navigation.navigate("Screen2")} />
    </>
  );
}
function TestScreenYolo() {
  return <Test screenName="Screen1" />;
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={TestScreen1} />
        <Stack.Screen name="Screen2" component={TestScreenYolo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
