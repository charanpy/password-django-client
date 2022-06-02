import React, { useState } from 'react';
import useAuthLevel from '../../hooks/useAuthLevel';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [displayComponent] = useAuthLevel(setUserId, userId);

  console.log(userId);

  return <>{displayComponent()}</>;
};

export default LoginPage;
