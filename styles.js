import {StyleSheet} from "react-native";
var WebFont = require("webfontloader");
// WebFont.load({
// 	google: {
// 		families: ["Droid Sans", "Droid Serif", "Pacifico"],
// 	},
// });
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE4E1",
    alignItems: "center",
    justifyContent: "center",
  },
  centerMe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "Sylfaen",
    fontSize: 14,
    color: "#707070",
  },
  titles: {
    color: "#B7A0A0",
    // fontFamily: "Pacifico",
    fontSize: 50,
  },
  iconTexts: {
    color: "#9A8282",
  },
  iconStyle: {
    backgroundColor: "#EDACA7",
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 500 / 2,
    borderWidth: 20,
    borderColor: "#B8C2DB",
  },
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke",
  },
});
