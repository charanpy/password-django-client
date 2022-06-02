import React from 'react';

const ButtonComponent = (props) => {
  return (
    <div className='w-full'>
      <button
        className='w-full p-2 rounded-lg text-white bg-blue-500 2xl:text-xl'
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
};

export default ButtonComponent;
