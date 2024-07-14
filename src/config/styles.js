import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    flex: 1,
    color: colors.dark,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
