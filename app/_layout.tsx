import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Stack } from "expo-router";
import FlashMessage from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import appScreenOptions from "./parameters/app-screen-options";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack screenOptions={appScreenOptions}>
          <Stack.Screen name="index" />
          <Stack.Screen name="screens/setup/otp" />
          <Stack.Screen name="screens/home/home" />
          <FlashMessage position="top" />
        </Stack>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
