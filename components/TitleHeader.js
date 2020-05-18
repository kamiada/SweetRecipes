import React from "react";
import {Text, View, Button} from "react-native";
import Styles from "../styles";
import {Ionicons} from "@expo/vector-icons";
import styles from "../styles";
import {TouchableOpacity} from "react-native-gesture-handler";

class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
    // this.state.SweetsType = props.type;
  }
  render() {
    return (
      <View style={styles.title_container}>
        <TouchableOpacity>
          <Ionicons name={"md-arrow-dropleft"} size={90} color={"grey"} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Lemon Cake</Text>
        <Ionicons
          name={"md-arrow-dropright"}
          size={90}
          color={"grey"}
          paddingHorizontal={90}
        />
      </View>
    );
  }
}
export default TitleHeader;
