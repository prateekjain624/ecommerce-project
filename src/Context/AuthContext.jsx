import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Create a context for authentication status and functions to manage it.
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
