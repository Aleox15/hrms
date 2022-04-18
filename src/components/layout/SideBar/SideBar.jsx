import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import {motion} from "framer-motion"
import UserContext from '../../../UserContext'
export default function SideBar(props) {
      const {userAuth} = useContext(UserContext)
    // const [showSidebar,setShowSidebar] = useState(false)
    const sidebarScroll = (
        <div className='scrollSidebar'>
            <div className='listScrollDocument'>Demande conget</div>
            <div className='listScrollDocument'>Demande absence</div>
            <div className='listScrollDocument'>Arrêt maladie</div>
        </div>

    )
    const styles = {
        width : props.toggle ? "50px":"200px",
    }
    console.log('Sidebar')
  return (
      <div  className='sidebar' style={styles}>
        <div className='menu'>
        </div>
        <ul className='menuSide' >
            <Link to="/"><li className='sideNav'><img src="./assets/icons/home.png" alt="" /> {props.toggle? "":<span className="routeSide"> Acceuil</span>}</li></Link>
            {userAuth.user_role ==='manager' ?(<Link to="cola"><li className='sideNav'><img src="./assets/icons/documents.png" alt="" /> {props.toggle? "":<span className="routeSide"> Collaborateur</span>}</li></Link>):''}
            {userAuth.user_role ==='manager' ?(<Link to="absenceG"><li className='sideNav'><img src="./assets/icons/calendrier.png" alt="" /> {props.toggle? "":<span className="routeSide">Gestion Absence</span>}</li></Link>):''}
            {userAuth.user_role ==='manager' ?(<Link to="documentG"><li className='sideNav'><img src="./assets/icons/documents.png" alt="" /> {props.toggle? "":<span className="routeSide">Gestion Documents</span>}</li></Link>):'' }
            {userAuth.user_role ==='employee' ? (<Link to="documentD"><li className='sideNav sideNavDocumentD'><img src="./assets/icons/documents.png" alt="" /> {props.toggle? "":<span className="routeSide">Documents</span>} </li></Link>):'' }
            {userAuth.user_role ==='employee' ? (<Link to="congesAbsenceD"><li  className='sideNav sideNavDocumentD'><img src="./assets/icons/calendrier.png" alt="" /> {props.toggle? "":<span className="routeSide">Congés & absences</span>} </li></Link>):'' }
        </ul>
          
      </div>

  )
}
