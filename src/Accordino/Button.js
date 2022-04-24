import React from 'react'
import './button.css'

export default function Button(props) {
  return (
    <>

    <div className = "dropDown" >
    {/* <button className = { props.color ? "dropBtn color" : "dropBtn nothing"} onClick={props.click} > {props.name} </button> */}
    <button className = {"dropBtn "+ props.color?'color':''} onClick={props.click} > {props.name} </button>   
    <div className = "dropDown-content" >
      <a href = "#"> Link 1 </a>
      <a href = "#"> Link 2</a>
      <a href = "#"> Link 3</a>
    </div>
    </div>


      {/* <button className = { props.color ? "color" : "nothing"} onClick={props.click} > {props.name} </button> */}
    </>
  )
}
