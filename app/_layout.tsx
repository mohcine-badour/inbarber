import { Stack } from "expo-router";
import appScreenOptions from "./parameters/app-screen-options";
import { SafeAreaView } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import FlashMessage from "react-native-flash-message";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack screenOptions={appScreenOptions}>
          <Stack.Screen name="index" />
          <Stack.Screen name="setup/confirm-phone-number" />
          <FlashMessage position="top" />
        </Stack>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
