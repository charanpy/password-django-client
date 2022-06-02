import React, { useState } from 'react';
import useAuthLevel from '../../hooks/useAuthLevel';

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (username, email, password) => {
    console.log(username, email);
    setUser((prev) => ({ ...prev, username, email, password }));
  };
  const [displayComponent] = useAuthLevel(handleChange, user);
  return <>{displayComponent()}</>;
};

export default RegisterPage;
