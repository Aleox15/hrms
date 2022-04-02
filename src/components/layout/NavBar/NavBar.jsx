import React,{useContext, useState} from 'react'
import './NavBar.css'
import {motion} from "framer-motion"
import UserContext from '../../../UserContext'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
  const [show,setShow] = useState(false)
  // function toggleS(){
   const {username,setUsername} = useContext(UserContext)
  
  //   props.setToggle(prev=>!prev)
  // }
  function toggleShow(){
    setShow(prev=>!prev)
  }
  function logout(){
  setUsername(null)
  localStorage.clear()
  }
  return (
    <div className='navbar'>
                  <div className="leftNav">
                    <img onClick={props.toggleS} className='menuIcon'src="./assets/icons/menu.png" alt="" />
                  </div>
            <div className='bellNavContainer'>
              <img className='bellNav' src="./assets/icons/bell.png" alt="" />
            </div>
            <div className='righNavProfile' onClick={toggleShow}>
                <img className='profileNav' src="./assets/icons/profileIcon.png" alt="" />
                <span>{username}</span>
              {show && <div className='scrollProfile'>
                <ul>
                  <li>{username}</li>
                  <li><Link to='/login' className='deconScrollProfile' onClick={logout}>Déconnexion</Link> </li>
                </ul>
              </div>}

    
            </div>
    </div>
  )
}
