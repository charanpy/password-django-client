import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider';
import request from '../lib/request';
import { errorToaster, successToaster } from '../lib/toast';
import { setItem } from '../lib/token';
import ButtonComponent from './Button.component';

const ImageAuthComponent = ({ images, user, page }) => {
  const { handleUser } = useUser();
  const navigate = useNavigate();
  const [password, setPassword] = useState({});
  if (!images?.length) return;

  const handleChange = (name) => {
    const prevPassword = { ...password };
    if (prevPassword[name]) delete prevPassword[name];
    else prevPassword[name] = 1;
    setPassword(prevPassword);
  };

  const handleLogin = async (passwordKey) => {
    try {
      const data = await request('image-auth/auth/', 'POST', {
        password: passwordKey?.join?.(''),
        userId: user,
      });
      handleUser(data?.user);
      setItem(data?.token);
      successToaster('Logged In Successfully');
      navigate('/');
    } catch (error) {}
  };

  const handleSubmit = async () => {
    const passwordKey = Object?.keys?.(password);
    if (page !== '/register') return handleLogin(passwordKey);
    if (passwordKey?.length < 2)
      return errorToaster('Please select at least 3 images');

    try {
      await request('user/', 'POST', {
        ...user,
        image_password: passwordKey?.join(''),
      });

      successToaster('Registered.Please Login');
      navigate('/login');
    } catch (error) {}
  };
  return (
    <>
      <h1 className='text-slate-900  2xl:text-xl'>Select Images</h1>
      <div className='flex flex-row flex-wrap'>
        {images?.map((image) => (
          <img
            className='rounded-md object-cover mx-4 my-4 cursor-pointer'
            height='200'
            width='200'
            key={image?.id}
            src={image?.image}
            alt={image?.name || 'object'}
            style={{
              filter: password[image?.name] ? 'contrast(0.5)' : 'contrast(1)',
            }}
            onClick={() => handleChange(image?.name)}
          />
        ))}
      </div>
      <div className='w-[200px]'>
        <ButtonComponent onClick={handleSubmit}>
          {page === '/register' ? 'Register' : 'Login'}
        </ButtonComponent>
      </div>
    </>
  );
};

export default ImageAuthComponent;
