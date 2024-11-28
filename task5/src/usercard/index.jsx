import React from 'react'

function Usercard({email,name,onClick}) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
     
        <h3> Name:{name}</h3>
        <p>Email:{email}</p>
       
    </div>
  )
}

export default Usercard