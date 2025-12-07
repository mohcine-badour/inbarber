import AsyncStorage from "@react-native-async-storage/async-storage";
import type { User } from "../types/auth";

const USER_KEY = "auth:user";

export async function getStoredUser(): Promise<User | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch (e) {
    console.warn("Failed to get stored user", e);
    return null;
  }
}

export async function storeUser(user: User): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.warn("Failed to store user", e);
  }
}

export async function clearStoredUser(): Promise<void> {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (e) {
    console.warn("Failed to clear stored user", e);
  }
}
