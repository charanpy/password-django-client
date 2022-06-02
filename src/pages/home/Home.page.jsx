import React from 'react';
import { useUser } from '../../context/UserProvider';

const HomePage = () => {
  const { logout } = useUser();
  return (
    <div>
      HomePage
      <button className='text-xl' onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
