import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import appScreenOptions from "./parameters/app-screen-options";
import FlashMessage from "react-native-flash-message";
import { AuthProvider } from "../src/providers/AuthProvider";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthProvider>
          <Stack screenOptions={appScreenOptions}>
            {/* <Stack.Screen name="index" />
          <Stack.Screen name="screens/auth/login" /> */}
            <FlashMessage position="bottom" />
          </Stack>
        </AuthProvider>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
