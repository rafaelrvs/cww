import React from 'react'
import Image from 'next/image';
import Logo from "@/app/image/logoCWW.png"



const NavBar = () => {
  return (
    <nav className='w-50 h-dvh'>
        <div className='flex justify-center  items-center p-5'>
        <Image src={Logo} alt="Logo da Empresa" width={60} height={150}/>
        <h1 className='text-[1.5rem]'>CWW</h1>
        </div>

    </nav>
  )
}

export default NavBar
