import { useEffect } from "react";
import { router } from "expo-router";
import { useAuth } from "../hooks/useAuth";
import type { UserRole } from "../types/auth";

const ROLE_ROUTES: Record<UserRole, string> = {
  client: "/(dashboard)/client",
  barber: "/(dashboard)/barber",
  admin: "/(dashboard)/admin",
};

export function RoleRedirect() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    // Pas connecté → login
    if (!user) {
      router.replace("/(auth)/login");
      return;
    }

    const target = ROLE_ROUTES[user.role] ?? "/(auth)/login";
    router.replace(target as any);
  }, [user, isLoading]);

  // Tu peux mettre un splash/loading ici
  return null;
}
