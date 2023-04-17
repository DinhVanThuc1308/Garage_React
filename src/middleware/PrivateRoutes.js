import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth';

const AuthRoutes = () => {
  const isAuth = useContext(AuthContext).checkLogin;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

const GuestRoutes = () => {
  const isAuth = useContext(AuthContext).checkLogin;
  console.log(isAuth);
  return isAuth ? <Navigate to="/profile" /> : <Outlet />;
};

export { AuthRoutes, GuestRoutes };
