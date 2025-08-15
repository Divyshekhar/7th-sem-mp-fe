'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the type for your user data
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // add other fields from your Go backend
}

// Context type can be User or null
const UserContext = createContext<User | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/user/info', {
      credentials: 'include', // send browser cookies to Go backend
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not logged in');
        return res.json();
      })
      .then((data: User) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
