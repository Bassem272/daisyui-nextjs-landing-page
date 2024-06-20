// import React, { useState, useEffect } from 'react';

// const themes = ['light', 'dark', 'cupcake', 'luxury'];

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const currentThemeIndex = themes.indexOf(theme);
//     const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
//     const newTheme = themes[nextThemeIndex];
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <button onClick={toggleTheme} className="btn btn-primary">
//       {`Switch to ${themes[(themes.indexOf(theme) + 1) % themes.length]} theme`}
//     </button>
//   );
// };

// export default ThemeToggle;

// src/components/ThemeSwitcher.js
// src/components/ThemeSwitcher.js


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setTheme } from '../store/userSlice';

// const ThemeSwitcher = () => {
//   const dispatch = useDispatch();
//   const currentTheme = useSelector((state) => state.user.theme);

//   const handleThemeChange = (theme) => {
//     dispatch(setTheme(theme));
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   };

//   return (
//     <div className="dropdown dropdown-bottom dropdown-end z-50">
//       <label tabIndex={0} className="btn m-1">
//         Theme
//       </label>
//       <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
//         <li><button onClick={() => handleThemeChange('light')}>Light</button></li>
//         <li><button onClick={() => handleThemeChange('dark')}>Dark</button></li>
//         <li><button onClick={() => handleThemeChange('luxury')}>Luxury</button></li>
//         <li><button onClick={() => handleThemeChange('cupcake')}>Cupcake</button></li>
//       </ul>
//     </div>
//   );
// };

// export default ThemeSwitcher;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/userSlice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.user.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  if (!mounted) return null; // Only render on the client side

  return (
    <div className="dropdown dropdown-bottom dropdown-end z-50">
      <label tabIndex={0} className="btn m-1">
        Theme
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><button onClick={() => handleThemeChange('light')}>Light</button></li>
        <li><button onClick={() => handleThemeChange('dark')}>Dark</button></li>
        <li><button onClick={() => handleThemeChange('luxury')}>Luxury</button></li>
        <li><button onClick={() => handleThemeChange('cupcake')}>Cupcake</button></li>
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
