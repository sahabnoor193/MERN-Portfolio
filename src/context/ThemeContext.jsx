// import { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext(undefined);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme || 'dark';
//   });

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Set CSS variables based on theme
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--color-primary', '#9A94BC');
      root.style.setProperty('--color-secondary', '#D4C4DD');
      root.style.setProperty('--color-accent', '#B784A7');
      root.style.setProperty('--color-text', '#4A4A4A');
      root.style.setProperty('--color-bg', '#F9F7FB');
      root.style.setProperty('--color-card', '#FFFFFF');
    } else {
      root.style.setProperty('--color-primary', '#B784A7');
      root.style.setProperty('--color-secondary', '#4A3E5C');
      root.style.setProperty('--color-accent', '#D4C4DD');
      root.style.setProperty('--color-text', '#E8E8E8');
      root.style.setProperty('--color-bg', '#1A1423');
      root.style.setProperty('--color-card', '#2A2139');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};