import { View, Text, Button } from "react-native";
import { useAuth } from "../../src/hooks/useAuth";
import type { UserRole } from "../../src/types/auth";

export default function LoginScreen() {
  const { signIn } = useAuth();

  const fakeLogin = async (role: UserRole) => {
    await signIn({
      id: "123",
      name: "John Doe",
      role,
      token: "fake-jwt-token",
    });
  };

  return (
    <View>
      <Text>Login</Text>

      <Button title="Login as client" onPress={() => fakeLogin("client")} />
      <Button title="Login as barber" onPress={() => fakeLogin("barber")} />
      <Button title="Login as admin" onPress={() => fakeLogin("admin")} />
    </View>
  );
}
