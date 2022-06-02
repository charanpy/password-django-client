import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserProvider';

const PrivateRoute = ({ children, privateRoute = true }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!privateRoute && user)
    return <Navigate to='/' state={{ from: location }} replace />;

  if (privateRoute && !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
