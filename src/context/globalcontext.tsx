"use client";

import React, { useState } from "react";

// Definição do tipo do contexto global
type IGlobalContext = {
  modalCadastro: boolean;
  setModalCadastro: React.Dispatch<React.SetStateAction<boolean>>;
  modalLogin: boolean;
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [modalCadastro, setModalCadastro] = useState<boolean>(false);
  const [modalLogin, setModalLogin] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ 
        modalCadastro, setModalCadastro,
        modalLogin, setModalLogin

     }}>
      {children}
    </GlobalContext.Provider>
  );
}
