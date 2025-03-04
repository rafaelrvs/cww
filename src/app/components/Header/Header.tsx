"use client"
import { useGlobalContext } from '@/context/globalcontext';
import React from 'react'

const Header = () => {
      const { modal,setModal } = useGlobalContext();
  return (
    <div className='h-25 w-full flex  items-center pr-10 p-[25px] justify-between' >
        <input type="text" placeholder='Procure um evento' className='h-10  w-2/4  bg-gray-200/20 text-amber-50 border-amber-50 border-[1px] rounded-[15px] p-1' />
        <div className=''>
            <input type="button" value={'Entrar'} className='p-2 w-25 rounded-[15px] self-center' />
            <input className='bg-primary-900 p-2 w-25 rounded-[15px]' type="button" value={'Cadastrar'} onClick={()=>setModal(true)}/>
        </div>
      
    </div>
  )
}

export default Header
