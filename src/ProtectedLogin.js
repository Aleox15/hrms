import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const ProtectedLogin = () => {
//   const isAuth = useAuth();
  return  localStorage.getItem('users')==='null' ?  <Outlet /> :<Navigate to="/profile" /> ;
};

export default ProtectedLogin;