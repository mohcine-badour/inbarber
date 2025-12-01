import { Avatar, Layout, Text, TopNavigation } from "@ui-kitten/components";
import { fonts } from "@/app/theme/fonts";
import { BarberCard } from "@/app/components/barber/BarberCard";

const Home = () => {
  return (
    <Layout>
      <TopNavigation
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
      <BarberCard />
    </Layout>
  );
};

export default Home;
