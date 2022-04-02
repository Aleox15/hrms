import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const ProtectedRoutes = () => {
//   const isAuth = useAuth();
  return  localStorage.getItem('users')==='null' ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;