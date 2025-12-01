import { fonts } from "@/app/theme/fonts";
import spacings from "@/app/theme/spacings";
import { Avatar, Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, Pressable, StyleSheet } from "react-native";

export const BarberCard = (): React.ReactElement => (
  <Pressable onPress={() => console.log("Barber card pressed")}>
    <ImageBackground
      source={require("../../assets/images/barber-card-default-background.jpg")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <Layout style={styles.header}>
        <Avatar
          source={require("../../assets/images/barber-default-avatar.png")}
          size="large"
        />
        <Layout style={styles.badgesContainer}>
          <Text style={styles.nameBadge}>Mohcine Badour</Text>
          <Layout style={styles.horizontalBadgesContainer}>
            <Text style={styles.cityBadge}>Casablanca</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.distanceBadge}>500m</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.statusBadge}>Status: Available</Text>
          </Layout>
        </Layout>
      </Layout>
      {/* <Layout style={styles.body}>
        <Button style={styles.bookNowButton} size="small" status='control'>
          Book Now
        </Button>
      </Layout> */}
    </ImageBackground>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 150,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 16,
    padding: spacings.small,
    borderRadius: 16,
    margin: spacings.small,
    overflow: "hidden",
  },
  backgroundImage: {
    borderRadius: 16,
    opacity: 0.6,
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    fontFamily: fonts.lato,
    fontSize: 12,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  nameBadge: {
    fontFamily: fonts.lato,
    fontSize: 13,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  cityBadge: {
    fontFamily: fonts.lato,
    fontSize: 10,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  statusBadge: {
    fontFamily: fonts.lato,
    fontSize: 10,
    color: "#FFFFFF",
    backgroundColor: "#10B981",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  badgesContainer: {
    backgroundColor: "transparent",
    flexDirection: "column",
    gap: 4,
  },
  horizontalBadgesContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  body: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  separator: {
    fontFamily: fonts.lato,
    fontSize: 10,
    color: "#FFFFFF",
  },
  distanceBadge: {
    fontFamily: fonts.lato,
    fontSize: 10,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
});
