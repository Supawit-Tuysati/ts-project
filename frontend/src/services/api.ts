export interface User {
  id: number;
  name: string;
}

const API_URL = "/api/users";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createUser(name: string): Promise<User> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}
