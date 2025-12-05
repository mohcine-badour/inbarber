import { BarberCard } from "@/app/components/barber/BarberCard";
import { fonts } from "@/app/theme/fonts";
import { Avatar, Layout, Text, TopNavigation } from "@ui-kitten/components";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <Layout style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
      <TopNavigation
        style={{ backgroundColor: "#F6F6F6" }}
        accessoryLeft={() => (
          <Avatar source={require("../../assets/gif/barber-pole.gif")} />
        )}
        accessoryRight={() => (
          <Avatar
            source={require("../../assets/images/barber-default-avatar.png")}
          />
        )}
        title={() => (
          <Text style={{ fontSize: 28, fontFamily: fonts.santaunicorn }}>
            IN BARBER
          </Text>
        )}
      />
      <ScrollView style={{ padding: 16 }}>
        <BarberCard />
      </ScrollView>
    </Layout>
  );
};

export default Home;
