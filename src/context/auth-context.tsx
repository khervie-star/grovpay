"use client";

import * as React from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// Define types and interfaces
interface AuthContextType {
  isLoggedIn: boolean;
  setToken: (jwtToken: string) => void;
  logout: () => void;
  userEmail?: string;
  isLoading: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to wrap your application
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string | undefined>("");
  const [isLoading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
      setIsLoggedIn(true);
      setUserEmail(jwtDecode(token).sub);
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  }, []);

  // const checkLoggedIn = (): void => {
  //   const access_token = Cookies.get("access_token");
  //   console.log(access_token);
  //   setIsLoggedIn(!!access_token);

  //   if (access_token) {
  //     setUserEmail(jwtDecode(access_token).sub);
  //   }
  // };

  const logout = () => {
    Cookies.remove("access_token");
    setIsLoggedIn(false);
  };

  const setToken = (access_token: string) => {
    Cookies.set("access_token", access_token, { expires: 7 });
    setIsLoggedIn(true);
  };

  // React.useEffect(() => {
  //   checkLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setToken, logout, userEmail, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
