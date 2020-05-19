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
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  title_container: {
    flexDirection: "row",
    backgroundColor: "#FAF2F2",
    justifyContent: "center",
    borderRadius: 500 / 2,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#B7A0A0",
  },
  titleText: {
    marginTop: 16,
    backgroundColor: "#FAF2F2",
    color: "#B7A0A0",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imageStyle: {
    marginTop: 16,
    backgroundColor: "#FAF2F2",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flexDirection: "row",
    backgroundColor: "#FAF2F2",
    justifyContent: "center",
    borderRadius: 100 / 2,
    borderWidth: 3,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderColor: "#B7A0A0",
  },
  recipeText: {
    fontFamily: "Cochin",
    fontSize: 22,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  recipeContainer: {
    flexDirection: "row",
    backgroundColor: "#FAF2F2",
    justifyContent: "center",
    borderRadius: 100 / 2,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderColor: "#B7A0A0",
  },
});
