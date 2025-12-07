export type UserRole = "client" | "barber" | "admin";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  token: string;
}
