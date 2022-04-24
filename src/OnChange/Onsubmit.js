import React from 'react'
import { useState } from 'react'

export default function Onsubmit() {
    const [data,setData] = useState({
      username : "",
      password : ""
    });
    const {username, password} = data;

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data)
    }
    const onChange = (e) => {
      setData({...data, [e.target.name] : [e.target.value]})
    }
  return (
    <>
      <form onSubmit={submitHandler} >
        <input type = "text" placeholder='username' onChange={onChange} name = 'username' value={username} />
        <input type = "password" placeholder= 'password' onChange={onChange} name = 'password' value={password} />
        <input type = "submit" value = 'Submit' />
      </form>
    </>
  )
}
