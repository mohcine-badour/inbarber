import React, { createContext, useEffect, useState, ReactNode } from "react";
import { getStoredUser, storeUser, clearStoredUser } from "../lib/authStorage";
import type { User } from "../types/auth";

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  signIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Chargement initial depuis le storage
  useEffect(() => {
    (async () => {
      try {
        const storedUser = await getStoredUser();
        if (storedUser) {
          setUser(storedUser);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const signIn = async (nextUser: User) => {
    setUser(nextUser);
    await storeUser(nextUser);
  };

  const signOut = async () => {
    setUser(null);
    await clearStoredUser();
  };

  const value: AuthContextValue = {
    user,
    isLoading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
