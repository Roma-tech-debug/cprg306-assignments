"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // To hold error message

  // GitHub sign-in with popup
  const gitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        setErrorMessage("Sign-in was cancelled or popup closed. Please try again.");
      } else {
        setErrorMessage("An error occurred during GitHub sign-in. Please try again.");
        console.error("Sign-in error:", error);
      }
    }
  };

  // Firebase sign-out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  // Set up an auth state listener to update user status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setErrorMessage(""); // Reset error message if state changes
    });
    return () => unsubscribe();
  }, []); // Only run once, no need for 'user' in dependency

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useUserAuth = () => {
  return useContext(AuthContext);
};
