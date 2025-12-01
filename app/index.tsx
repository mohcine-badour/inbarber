import { Button, Layout, Spinner, Text } from "@ui-kitten/components";
import { Image } from "expo-image";
import { useState } from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { fonts, useAppFonts } from "./theme/fonts";

import { router } from "expo-router";
import {
  CountryCode,
  PhoneInput,
  isValidNumber,
} from "react-native-phone-entry";
import { TypeAnimation } from "react-native-type-animation";

const LoadingIndicator = (props: ImageProps): React.ReactElement => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" status="info" />
  </View>
);

const Index = () => {
  const fontsLoaded = useAppFonts();
  const [countryCode, setCountryCode] = useState<CountryCode>("US");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Layout style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("./assets/gif/barber-pole.gif")}
          style={styles.barberPoleGif}
          contentFit="contain"
        />
        <TypeAnimation
          cursorStyle={{ color: "white" }}
          repeat={2}
          sequence={[{ text: "IN BARBER" }]}
          style={{
            color: "black",
            fontFamily: fonts.santaunicorn,
            fontSize: 40,
          }}
        />
      </View>
      <Layout style={styles.descriptionContainer}>
        <Text style={styles.description}>Enter your phone number</Text>
        <Text style={styles.secondaryDescription}>
          We will send you a confirmation code to verify it
        </Text>

        <PhoneInput
          defaultValues={{
            countryCode: "MA",
            callingCode: "+212",
            phoneNumber: "+212",
          }}
          countryPickerProps={{
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
          }}
          onChangeText={(text) =>
            console.log(
              "Phone number:",
              text,
              "isValidNumber:",
              isValidNumber(text, countryCode)
            )
          }
          onChangeCountry={(country) => {
            console.log("Country:", country);
            setCountryCode(country.cca2);
          }}
        />

        <Button
          style={styles.verifyButton}
          status="basic"
          // accessoryLeft={() => <LoadingIndicator />}
          onPress={() => {
            router.push("/screens/home/home");
            showMessage({
              message: "Verification ... please wait",
              type: "success",
            });
          }}
        >
          Verify Phone Number
        </Button>
      </Layout>
      <FlashMessage position="bottom" />
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 48,
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  barberPoleGif: {
    width: 72,
    height: 72,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.santaunicorn,
    fontSize: 40,
  },
  descriptionContainer: {
    flexDirection: "column",
    gap: 10,
  },
  description: {
    fontSize: 18,
  },
  secondaryDescription: {
    fontSize: 14,
    color: "gray",
  },
  verifyButton: {
    borderRadius: 12,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Index;
