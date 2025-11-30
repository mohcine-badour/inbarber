import { Layout, Text, Button, Spinner } from "@ui-kitten/components";
import { fonts, useAppFonts } from "../../theme/fonts";
import { ImageProps, StyleSheet, View } from "react-native";
import { useState } from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

import {
  PhoneInput,
  isValidNumber,
  CountryCode,
} from "react-native-phone-entry";

const LoadingIndicator = (props: ImageProps): React.ReactElement => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" status="info" />
  </View>
);

const ConfirmPhoneNumber = () => {
  const fontsLoaded = useAppFonts();
  const [countryCode, setCountryCode] = useState<CountryCode>("US");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>IN BARBER</Text>
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
          accessoryLeft={() => <LoadingIndicator />}
          onPress={() => {
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
export default ConfirmPhoneNumber;
