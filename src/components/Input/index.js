import React from 'react'

function Input({className, onChange, value}) {
  return(
   <input type="text" onChange={onChange} className={className} value={value}/>
  )
}

export default Input