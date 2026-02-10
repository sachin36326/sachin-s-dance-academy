// Simple authentication helper (in production, use proper auth like NextAuth.js or Supabase Auth)

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}

export const AUTH_STORAGE_KEY = 'sachinsdance_user';

export function setUser(user: User) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }
}

export function getUser(): User | null {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem(AUTH_STORAGE_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
  }
  return null;
}

export function clearUser() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function isAuthenticated(): boolean {
  return getUser() !== null;
}
