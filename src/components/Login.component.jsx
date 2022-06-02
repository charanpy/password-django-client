import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import request from '../lib/request';
import { errorToaster } from '../lib/toast';
import ButtonComponent from './Button.component';
import Header from './Header.component';
import InputComponent from './Input.component';

const LoginComponent = ({ handleChange, setLevel }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (!email || !password) {
      return errorToaster('Please fill all fields');
    }

    try {
      const data = await request('user/login/', 'POST', { email, password });
      handleChange(data?.id);
      setLevel((level) => level + 1);
    } catch (error) {}
  };
  return (
    <section className='flex flex-col space-y-6 items-center'>
      <Header>Login To Your Account</Header>

      <InputComponent
        text='Email'
        type='email'
        required
        placeholder='Enter Email'
        ref={emailRef}
      />
      <InputComponent
        text='Password'
        type='password'
        required
        placeholder='Enter Password'
        ref={passwordRef}
      />

      <ButtonComponent onClick={handleSubmit}>Login</ButtonComponent>

      <Link to='/register' className='text-blue-500 underline'>
        Register
      </Link>
    </section>
  );
};

export default LoginComponent;
