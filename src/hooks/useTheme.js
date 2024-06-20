// // src/hooks/useTheme.js
// import { useState, useEffect } from 'react';

// const useTheme = (defaultTheme = 'theme1') => {
//   const [theme, setTheme] = useState(defaultTheme);

//   useEffect(() => {
//     // Only access localStorage on the client side
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme') || defaultTheme;
//       document.documentElement.setAttribute('data-theme', savedTheme);
//       setTheme(savedTheme);
//     }
//   }, [defaultTheme]);

//   const setNewTheme = (newTheme) => {
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   return [theme, setNewTheme];
// };

// export default useTheme;
// src/components/ThemeSwitcher.js
import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const themes = ['theme1', 'theme2', 'theme3', 'theme4'];

  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" tabIndex={0}>
        Select Theme
      </button>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {themes.map((t) => (
          <li key={t}>
            <a onClick={() => setTheme(t)}>{t}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
