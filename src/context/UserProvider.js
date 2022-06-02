import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader.component';
import request from '../lib/request';
import { successToaster } from '../lib/toast';
import { removeItem } from '../lib/token';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUser] = useState({
    user: null,
    loading: true,
  });

  const { user, loading } = userData;

  const getMe = async () => {
    try {
      const data = await request('user/me/', 'GET', null, true, false);
      setUser((prev) => ({ ...prev, user: data, loading: false }));
    } catch (error) {
      setUser((prev) => ({ ...prev, user: null, loading: false }));
    }
  };

  const handleUser = (user) => {
    setUser((prev) => ({ ...prev, user }));
  };

  useEffect(() => {
    getMe();
  }, []);

  const logout = async () => {
    try {
      await request('user/logout/', 'GET', null, true, false);
    } catch (error) {
    } finally {
      handleUser(null);
      successToaster('Logged Out');
      removeItem();
      navigate('/login');
    }
  };

  if (loading) return <Loader />;
  return (
    <UserContext.Provider value={{ user, handleUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
