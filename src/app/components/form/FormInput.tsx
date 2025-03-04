import React from 'react'
type FormInputProps = React.ComponentProps<"input">
const FormInput = ({...props}:FormInputProps) => {
  return (
        <input {...props}/>
  )
}

export default FormInput
