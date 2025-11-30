import React from "react";
import { Text, Button } from "@ui-kitten/components";
import { router } from "expo-router";

export default function Index() {

  return (
    <>
    <Text>hello world</Text>
    <Button onPress={() => router.push("/screens/setup/confirm-phone-number")}>Confirm Phone Number</Button>
    </>
  );
}

