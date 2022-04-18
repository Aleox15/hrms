import './App.css'
import Login from './components/Auth/Login/Login'
import Profile from './components/Admin/Profile/Profile'
import Accueil from './components/Admin/Accueil/Accueil'
import Collaborateur from './components/Admin/Collaborateur/Collaborateur'
import AbsenceG from './components/Admin/AbsenceG/AbsenceG'
import DocumentG from './components/Admin/DocumentG/DocumentG'
import DocumentD from './components/User/DocumentD/DocumentD'
import CongesAbsenceD from './components/User/CongesAbsenceD/CongesAbsenceD'
import UserContext from './UserContext'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import ProtectedLogin from './ProtectedLogin'
import NavBar from './components/layout/NavBar/NavBar'
import SideBar from './components/layout/SideBar/SideBar'
import Layout from './components/layout/Layout'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [toggle,setToggle] = useState(false);
 
  const [userAuth, setUserAuth] = useState(()=> JSON.parse(localStorage.getItem('users')) || null);
  const [token, setToken] = useState( ()=> JSON.parse(localStorage.getItem('token')) || null);
  const navigate = useNavigate();
  
  useEffect(() => {
      localStorage.setItem('users',JSON.stringify(userAuth))
      localStorage.setItem('token',JSON.stringify(token))
  }, [userAuth,token]); 
  const styles = {
    width: toggle? 'calc(100% - 50px)':"calc(100% - 200px)",
    left: toggle? '50px':'200px'
}
function toggleS(){
  setToggle(prev=>!prev)
}
  console.log('App')
  return (
    <div className="App">
       <UserContext.Provider value={{
        // id,
        userAuth,
        setUserAuth,
        token,
        setToken
        }}>
        <Routes>
              <Route element={<ProtectedLogin/>}>
                <Route path="/login" element={<Login />}/>
              </Route>
                <Route element={<ProtectedRoutes />}>
                  <Route path='/' element={<Layout/>}>
                    <Route index element={<Accueil />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cola" element={<Collaborateur />} />
                    <Route path="/absenceG" element={<AbsenceG />} />
                    <Route path="/documentG" element={<DocumentG />} />
                    <Route path="/documentD" element={<DocumentD />} />
                    <Route path="/congesAbsenceD" element={<CongesAbsenceD />} />
                </Route>
              </Route>

        </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
