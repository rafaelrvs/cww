
import React from 'react'
import { ReactNode } from "react";

type FormRootProps = React.ComponentProps<"form"> & {
    children: ReactNode;
  };
  
const FormRoot = ({className, children , ...props}:FormRootProps) => {
  return (
    <form className='flex flex-col w-[500px] rounded-[25px] p-5 gap-3  bg-black/50  fixed top-1/4 left-1/3 animate-move-left-to-right ' {...props}>
      {children}
    </form>
  )
}

export default FormRoot
