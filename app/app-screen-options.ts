import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const appScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
  orientation: "portrait",
  statusBarStyle: "dark",
  contentStyle: {
    backgroundColor: "white",
  },
};

export default appScreenOptions;
