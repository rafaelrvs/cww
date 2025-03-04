"use client";

import React from "react";
import { useGlobalContext } from "@/context/globalcontext";
import ModalLogin from './../modalLogin/ModalLogin';

const Header = () => {
  const { setModalCadastro, setModalLogin,modalCadastro,modalLogin } = useGlobalContext();

  const handleActiveModal = (e: React.MouseEvent<HTMLInputElement>) => {
    const btnclick = e.currentTarget.value; // currentTarget está tipado corretamente
    if (btnclick === "Entrar") {
      setModalCadastro(false);
      setModalLogin(true);
    } else if (btnclick === "Cadastrar") {
      setModalLogin(false);
      setModalCadastro(true);
    }
  };
  
  return (
    <div className="h-25 w-full flex items-center pr-10 p-[25px] justify-between">
      <input
        type="text"
        placeholder="Procure um evento"
        className="h-10 w-2/4 bg-gray-200/20 text-amber-50 border-amber-50 border-[1px] rounded-[15px] p-1"
      />
      <div>
        <input
          type="button"
          value="Entrar"
          className="p-2 w-25 rounded-[15px] self-center"
          onClick={(e) => handleActiveModal(e)}
        />
        <input
          className="bg-primary-900 p-2 w-25 rounded-[15px]"
          type="button"
          value="Cadastrar"
          onClick={(e) => handleActiveModal(e)}
        />
      </div>
    </div>
  );
};

export default Header;
