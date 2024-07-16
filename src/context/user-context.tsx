"use client";

import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { getUserByEmail } from "../services";
import { useAuth } from "./auth-context";

type User = {
  id?: number;
  fullName?: string;
  phone?: string;
  email?: string;
  registrationStatus?: "STEP_1" | "STEP_2" | "STEP_3" | "COMPLETED";
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
};

type Token = string;

const UserContext = React.createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: Token | null;
  setToken: React.Dispatch<React.SetStateAction<Token | null>>;
  isLoading_user: boolean;
  error_fetching_user: Error | null;
}>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isLoading_user: false,
  error_fetching_user: null
});

export const useUser = () => React.useContext(UserContext);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<Token | null>(null);
  const { userEmail } = useAuth();

  /*
   * Get user
   */

  const {
    data: user_data,
    isLoading: isLoading_user,
    error: error_fetching_user
  } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () =>
      getUserByEmail({
        userEmail: userEmail
      }),
    enabled: !!userEmail,
    retry: 2
  });

  React.useEffect(() => {
    if (user_data) {
      setUser(user_data);
    }
  }, [user_data]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoading_user,
        error_fetching_user
      }}>
      {children}
    </UserContext.Provider>
  );
};
