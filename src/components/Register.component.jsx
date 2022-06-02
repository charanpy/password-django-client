import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import request from '../lib/request';
import { errorToaster } from '../lib/toast';
import ButtonComponent from './Button.component';
import Header from './Header.component';
import InputComponent from './Input.component';

const RegisterComponent = ({ handleChange, setLevel }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (!username || !email || !password) {
      return errorToaster('Please fill all fields');
    }

    try {
      await request('user/check-user/', 'POST', { email });
      handleChange(username, email, password);
      setLevel((level) => level + 1);
    } catch (error) {}
  };
  return (
    <section className='flex flex-col space-y-6 items-center'>
      <Header>Create New Account</Header>
      <InputComponent
        text='Username'
        type='text'
        required
        placeholder='Enter Username'
        ref={usernameRef}
      />
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

      <ButtonComponent onClick={handleSubmit}>Register</ButtonComponent>
      <Link to='/login' className='text-blue-500 underline'>
        Login
      </Link>
    </section>
  );
};

export default RegisterComponent;
