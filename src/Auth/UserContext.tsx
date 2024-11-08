// UserContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from './client'; // Your Supabase client initialization
import { Session, User } from '@supabase/supabase-js';

// Define types for the context state
interface UserContextType {
  user: User | null;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Listen for changes in authentication state
  useEffect(() => {
    const session: Session | null = supabase.auth.getSession
    setUser(session?.user ?? null);

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setUser(null);
        } else if (event === 'SIGNED_IN') {
          setUser(session?.user ?? null);
        }
      }
    );

    // Clean up the listener when the component unmounts
    return () => {
      authListener?.subscription.unsubscribe()
    };
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the user context
export const useUser = (): UserContextType => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
