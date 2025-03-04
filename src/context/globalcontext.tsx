"use client";

import React, { useState } from "react";

// Definição do tipo do contexto global
type IGlobalContext = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Criando o Contexto Global
const GlobalContext = React.createContext<IGlobalContext | null>(null);

// Hook para consumir o contexto de forma segura
export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

// Provider do Contexto
export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
