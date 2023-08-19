import React, { createContext, useEffect, useState } from 'react';
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export type AuthContext = {
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
  user?: User;
};

export const UserContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({ children }: { children: React.JSX.Element }) => {
  const [user, setUser] = useState<User>();

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return firebaseSignOut(auth);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setUserState = async () => {
    const user = await new Promise<User | null>((res, _rej) => {
      onAuthStateChanged(auth, currentUser => {
        res(currentUser);
      });
    });

    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    setUserState();
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signOut, signIn, user }}>
      {children}
    </UserContext.Provider>
  );
};
