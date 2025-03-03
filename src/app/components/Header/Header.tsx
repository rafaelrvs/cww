import React from 'react'

const Header = () => {
  return (
    <div className='h-20 w-full flex justify-between items-center pr-10 p-[25px]'>
        <input type="text" placeholder='Procure um evento' className='  h-10  w-2/4  border-amber-50 border-[1px] rounded-[15px] p-1' />
        <div>
            <input type="button" value={'Entrar'} className='p-2 w-25 rounded-[15px]' />
            <input className='bg-primary-900 p-2 w-25 rounded-[15px]' type="button" value={'Cadastrar'}/>
        </div>
      
    </div>
  )
}

export default Header
