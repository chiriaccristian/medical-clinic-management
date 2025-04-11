"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
  sendPasswordResetEmail,
  User as FirebaseUser,
  UserCredential
} from "firebase/auth";
import { auth } from "../lib/firebase";

// Type for the context
interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  register: (email: string, password: string, name: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Set up the Firebase auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create a new user with email and password
  const register = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the users profile with their name
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name
      });
    }
    
    return userCredential;
  };

  // Sign out
  const logout = () => {
    return signOut(auth);
  };

  // Sign in with Google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Reset password
  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading,
      login,
      register,
      logout,
      loginWithGoogle,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
