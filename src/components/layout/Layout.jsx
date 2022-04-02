import React,{useState} from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import "./Layout.css"
export default function Layout({className,children}) {
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
            <div className={className}>{children}</div>
        </div> 

    </div>
  )
}
