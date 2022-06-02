import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginComponent from '../components/Login.component';
import RegisterComponent from '../components/Register.component';
import CategoryComponent from '../components/Category.component';

const useAuthLevel = (handleChange, user) => {
  const router = useLocation();

  console.log(router.pathname);

  const [level, setLevel] = useState(1);

  const displayComponent = () => {
    if (level === 1) {
      return router.pathname === '/register' ? (
        <RegisterComponent handleChange={handleChange} setLevel={setLevel} />
      ) : (
        <LoginComponent setLevel={setLevel} handleChange={handleChange} />
      );
    }

    if (level === 2) {
      return <CategoryComponent user={user} page={router.pathname} />;
    }
  };

  return [displayComponent];
};

export default useAuthLevel;
