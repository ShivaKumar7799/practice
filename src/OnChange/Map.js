import React from 'react'

export default function Map() {
  const names = ["shiva", 'kumar', 'bammidi'];
  const filtered = names.filter((name) => name.includes("ar"))
  return (
   <>
    {
      filtered.map(
        (value,index) => <li key = {index}> {value}</li>
      )
    }
   </>
  )
}
