"use client";

import React from "react";
import { Form } from "../form";
import Image from "next/image";
import Logo from "@/app/image/logoCWW.png";
import { useGlobalContext } from "@/context/globalcontext";

const Formulario = () => {
  const { modal,setModal } = useGlobalContext();

  if (!modal) {
    return <div></div>;
  }

  return (
    <Form.Root>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Cadastre-se</h1>
        <Image
          src={Logo}
          alt="Logo da Empresa"
          width={60}
          height={150}
          className="hover:scale-105 duration-700 cursor-pointer"
          onClick={(()=>setModal(false))}
        />
      </div>
      <label htmlFor="email">Email</label>
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        required
      />
      <label htmlFor="Nome">Nome</label>
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="Nome"
        type="text"
        placeholder="Digite seu nome"
        required
      />
      <label htmlFor="Senha">Senha</label>
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="Senha"
        type="password"
        placeholder="Digite sua senha"
        required
      />
      <label htmlFor="confirme">Confirme a senha</label>
      <Form.Input
        className="bg-gray-800 rounded-[25px] p-2"
        id="confirme"
        type="password"
        placeholder="Confirme sua senha"
        required
      />
      <Form.Input
        className="bg-blue-600 rounded-[25px] p-2 mt-3 transition duration-200 ease-in hover:scale-105 cursor-pointer"
        type="submit"
        value="Cadastrar"
      />
    </Form.Root>
  );
};

export default Formulario;
