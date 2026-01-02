import { apiService } from "@/services/api";
import type { IUser } from "./types";

export function useFetchUsers() {
  return apiService.get<IUser[]>("/users");
}

export function useFetchUserById(userId: number) {
  return apiService.get<IUser>(`/users/${userId}`);
}

export function useCreateUser(data: Omit<IUser, "id">) {
  return apiService.post<IUser>("/users", data);
}
