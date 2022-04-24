import React from 'react'
import { useState } from 'react';

export default function OnchangeHandler() {
  const [user,setUser] = useState("");
  const handler = (e) => {
    setUser(e.target.value)
  }
  return (
    <>
    <input onChange={handler} type="text" placeholder = "userName" value={user} name = "user" />
     <span> Username:  </span> {user}
    </>
  )
}

