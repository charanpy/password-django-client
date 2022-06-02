import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/Home.page';
import LoginPage from '../pages/login/Login.page';
import RegisterPage from '../pages/register/Register.page';
import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <PrivateRoute privateRoute={false}>
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PrivateRoute privateRoute={false}>
            <RegisterPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
