import React from 'react';

const centerClass = (center) =>
  center ? 'flex flex-col justify-center items-center' : '';

const Layout = ({ children, center = true }) => {
  return (
    <main className={`bg-slate-100 p-5 min-h-screen ${centerClass(center)}`}>
      {children}
    </main>
  );
};

export default Layout;
