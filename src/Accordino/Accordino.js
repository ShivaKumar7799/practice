import React, { useEffect } from 'react'
import Button from './Button'
import { useState} from 'react'

export default function Accordino() {

  const [home,setHome] = useState(null);
  const [about,setAbout] = useState(null);
  const [contact,setContact] = useState(null);

  const [showHome,setShowHome] = useState(false);
  const [showAbout,setShowAbout] = useState(false);
  const [showContact,setShowContact] = useState(false);

 // const [homeBtn,setHomeBtn] = useState(0);
  const [aboutBtn,setAboutBtn] = useState(0);
  const [contactBtn,setContactBtn] =useState(0);

  //useEffect(homePage, [])

  const homePage = () => {

   // setShowHome(!showHome)
    // if(showHome){
    //   setShowHome(!showHome)
    // } else{
    //   setHome("This is text in home page,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    //   setShowHome(!showHome)
    // }
    
   return  showHome ? setHome("This is the home page") : null

  //   if(homeBtn == 0){
  //     setHome("This is text in home page,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  //     setShowHome(true)
  //     setHomeBtn(1)
  //   } else{
  //     setShowHome(false)
  //     setHomeBtn(0)
  //  }
  
  }
  const aboutUs = () => {
      
      if(aboutBtn == 0){
        setAbout("This is a text in about us,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        setShowAbout(true)
        setAboutBtn(1)
      } else{
        setShowAbout(false)
        setAboutBtn(0)
      }
  }
  const contactUs = () => {
      
      if(contactBtn == 0){
        setContact("This is about contact information, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")
        setShowContact(true)
        setContactBtn(1)
      } else{
        setShowContact(false)
        setContactBtn(0)
      }
  }

  return (
    <>
      <Button color = {showHome} click = {homePage} name = "Home Page" />
      <Button color = {showAbout} click = {aboutUs} name = "About Us" />
      <Button color = {showContact} click = {contactUs} name = "Contact Us" />
      {showHome ? <div> <h1>Home </h1> {home}  </div> : null} <br />
      {showAbout ? <div> <h1>About</h1> {about}</div> : null} <br />
      {showContact ?  <div> <h1> Contact </h1> {contact} </div> : null}
    </> 
  )
}
