import React, { forwardRef } from 'react';
import './input.css';

const InputComponent = forwardRef((props, ref) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='text-slate-900  2xl:text-xl'>{props?.text}</label>
      <input
        {...props}
        className='authInput focus:ring-blue-500 focus:border-blue-500'
        ref={ref}
      />
    </div>
  );
});

export default InputComponent;
