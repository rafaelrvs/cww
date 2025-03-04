"use client";

import React from "react";
import { Form } from ".";
import Image from "next/image";
import Logo from "@/app/image/logoCWW.png";
import { useGlobalContext } from "@/context/globalcontext";

const FormularioLogin = () => {
  const { modalLogin, setModalLogin } = useGlobalContext();

  if (!modalLogin) {
    return null;
  }

  return (
    <Form.Root>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Login</h1>
        <Image
          src={Logo}
          alt="Logo da Empresa"
          width={60}
          height={150}
          className="hover:scale-105 duration-700 cursor-pointer"
          onClick={() => setModalLogin(false)}
        />
      </div>
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        required
      />
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="password"
        type="password"
        placeholder="Digite sua senha"
        required
      />
      <Form.Input type="submit" value="Entrar" className="bg-blue-600 rounded-[25px] p-2 mt-3 transition duration-200 ease-in hover:scale-105 cursor-pointer"/>
    </Form.Root>
  );
};

export default FormularioLogin;
