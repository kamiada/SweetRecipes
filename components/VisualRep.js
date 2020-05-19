//VisualRep - visual represenation, coz life is not easy and I like show off every so often
import React from "react";
import {Image, View} from "react-native";
import styles from "../styles";

class VisualRep extends React.Component {
  render() {
    return (
      <View paddingVertical={10}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={this.props.src} />
        </View>
      </View>
    );
  }
}
export default VisualRep;
