import { env } from "@/config/env";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  headers?: Record<string, string>;
};

export async function api<T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T> {
  const { method = "GET", body, headers } = options || {};

  const response = await fetch(`${env.baseUrl}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Métodos auxiliares
export const apiService = {
  get: <T>(endpoint: string) => api<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    api<T>(endpoint, { method: "POST", body }),
  put: <T>(endpoint: string, body: unknown) =>
    api<T>(endpoint, { method: "PUT", body }),
  delete: <T>(endpoint: string) => api<T>(endpoint, { method: "DELETE" }),
};
