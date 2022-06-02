import React from 'react';
import Layout from './layout/Layout';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Layout>
        <AppRoutes />
        <ToastContainer theme='colored' />
      </Layout>
    </UserProvider>
  );
};

export default App;
