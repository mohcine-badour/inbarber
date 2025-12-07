import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../../src/hooks/useAuth";

export default function DashboardLayout() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user, isLoading]);

  if (isLoading || !user) {
    return null; // ou un loader
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
