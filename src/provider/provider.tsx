"use client";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider, UserContextProvider } from "@/context";
import { AppToastBar } from "@/components";

const queryClient = new QueryClient();

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <AuthProvider>
          <UserContextProvider>
            <AppToastBar />
            {children}
          </UserContextProvider>
        </AuthProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
};
