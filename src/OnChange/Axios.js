import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Axios() {
  const [data,setData] = useState([])
  const url = "https://api.github.com/users/shivakumar7799/repos";
 
 useEffect(()=> {
  axios.get(url).then( 
    (response) => setData(response.data)
   )
 }, [])
  return (
    <>
    {data.map((item) => {
      return <li key = {item.id} > {item.name} </li>
    })}

    </>
  )
}
