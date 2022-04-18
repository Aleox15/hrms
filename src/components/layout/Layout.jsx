import React,{useState} from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import "./Layout.css"
export default function Layout() {
    const [toggle,setToggle] = useState(false);
    const styles = {
        width: toggle? 'calc(100% - 50px)':"calc(100% - 200px)",
        left: toggle? '50px':'200px'
    }
    function toggleS(){
      setToggle(prev=>!prev)
    }
  return (
    <div className='layout'>
        
        <SideBar toggle={toggle} toggleS={toggleS}/>
        <div className='content' style={styles}>
          <NavBar toggleS={toggleS} />
          <Outlet />
        </div> 

    </div>
  )
}
