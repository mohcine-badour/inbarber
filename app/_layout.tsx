import { Stack } from "expo-router";
import appScreenOptions from "./app-screen-options";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <Stack screenOptions={appScreenOptions}>
        <Stack.Screen name="index" />
        <Stack.Screen name="second" />
      </Stack>
    </SafeAreaView>
  );
}
