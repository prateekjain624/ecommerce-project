import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

// Custom hook for accessing authentication context
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, name) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      // Add user to Firestore database
      const user = userCredentials.user.uid;
      await setDoc(doc(db, "users", user), {
        email,
        name,
      });
      return userCredentials;
    } catch (error) {
      console.error("Signup error:", error.message);
      throw error;
    }
  };

  const signin = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Signin error:", error.message);
      throw error;
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Signout error:", error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ signup, signin, currentUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
