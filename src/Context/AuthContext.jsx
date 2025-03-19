import { createContext, useContext } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Create a context for authentication status and functions to manage it.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password) =>
    createUserWithEmailAndPassword(email, password);

  const signin = async (email, password) =>
    signInWithEmailAndPassword(email, password);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
