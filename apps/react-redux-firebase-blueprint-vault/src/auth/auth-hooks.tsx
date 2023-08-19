import { useContext } from 'react';
import { AuthContext, UserContext } from './auth-context';

export const useAuthContext = (): AuthContext => {
  const c = useContext(UserContext);

  if (!c) {
    throw new Error('Auth context error');
  }

  return c;
};
