import { User } from '@/entities/types';
import { useAuth } from '@/hooks/store';
import { PropsWithChildren, createContext, useState } from 'react';

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isAuthenticated?: boolean;
};

export default function AuthProvider({
  children,
  isAuthenticated,
}: AuthProviderProps) {
  //   const authenticateDetails = useAuthenticate();

  const userDetails = useAuth.getState().userDetails;
  const [user] = useState<User | null>(isAuthenticated ? userDetails : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
