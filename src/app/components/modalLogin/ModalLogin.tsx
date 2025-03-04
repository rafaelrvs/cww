"use client"
import React from 'react'
import FormularioLogin from '../form/FormularioLogin'
import FormularioCadastro from '../form/FormularioCadastro'
import { useGlobalContext } from '@/context/globalcontext';

const ModalLogin = () => {
    const { 
        modalCadastro,
        setModalCadastro,
        modalLogin,setModalLogin 
    } = useGlobalContext();


    if (modalLogin) {
      
        return (
            <FormularioLogin/>
        )
    }
    if (modalCadastro) {
    
      return(
        <FormularioCadastro/>
      )
    }
}

export default ModalLogin
