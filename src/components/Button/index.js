import React from 'react'

function Button({className, onClick, label}){
  return(
   <button onClick={onClick} className={className}>{label}</button>
  )
}

export default Button