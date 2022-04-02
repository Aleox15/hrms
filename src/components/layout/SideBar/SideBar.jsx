import React,{useState} from 'react'
import './SideBar.css'
import {motion} from "framer-motion"
export default function SideBar(props) {
    // const [isOpen,setIsOpen] = useState(false)
    // const toggle=()=>{
    //     setIsOpen(prev=>!prev)
    // }
    const styles = {
        width : props.toggle ? "50px":"200px",
    }
    console.log(props.toggleS)
  return (
      <div  className='sidebar' style={styles}>
        <div className='menu'>
        </div>
        <ul className='menuSide' >
            <li className='sideNav'><img src="./assets/icons/home.png" alt="" /> {props.toggle? "":<span className="routeSide"> Acceuil</span>}</li>
            <li className='sideNav'><img src="./assets/icons/documents.png" alt="" /> {props.toggle? "":<span className="routeSide"> Collaborateur</span>}</li>
            <li className='sideNav'><img src="./assets/icons/calendrier.png" alt="" /> {props.toggle? "":<span className="routeSide">Absence</span>}</li>
            <li className='sideNav'><img src="./assets/icons/documents.png" alt="" /> {props.toggle? "":<span className="routeSide">Documents</span>}</li>
        </ul>
          
      </div>

  )
}
