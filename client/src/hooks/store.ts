import { User } from '@/entities/types';
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userDetails: User | null;
  setAuth: (auth: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  userDetails: null,
  setAuth: (auth: boolean) => set({ isAuthenticated: auth }),
  setUserDetails: (user: User) => set({ userDetails: user }),
}));
