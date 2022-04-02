import './App.css'
import Login from './components/Auth/Login/Login'
import NavBar from './components/layout/NavBar/NavBar'
import SideBar from './components/layout/SideBar/SideBar'
import Profile from './components/Admin/Profile/Profile'
import Collaborateur from './components/Admin/Collaborateur/Collaborateur'
import AbsenceG from './components/Admin/AbsenceG/AbsenceG'
import DocumentG from './components/Admin/DocumentG/DocumentG'
import UserContext from './UserContext'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import ProtectedLogin from './ProtectedLogin'

import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [username, setUsername] = useState(localStorage.getItem('users'));
  const navigate = useNavigate();
  useEffect(() => {
      localStorage.setItem('users',username)
  }, [username]); 
  console.log()
  return (

    <div className="App">
       <UserContext.Provider value={{
        // id,
        username,
        setUsername
        }}>
        <Routes>
              <Route element={<ProtectedLogin/>}>
                <Route path="/login" element={<Login />}/>
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/cola" element={<Collaborateur />} />
                <Route path="/absenceG" element={<AbsenceG />} />
                <Route path="/documentG" element={<DocumentG />} />
              </Route>

        </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
