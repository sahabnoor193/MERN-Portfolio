// import { useState } from 'react';
// import { Sun, Moon, Menu, X } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//             Sahab
//           </h1>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center gap-6">
//             <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a>
//             <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
//             <a href="#qualification" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Qualification</a>
//             <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
//             <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
//             <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
//             <button 
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {theme === 'dark' ? 
//                 <Sun className="w-5 h-5 text-primary" /> : 
//                 <Moon className="w-5 h-5 text-primary" />
//               }
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden slide-in">
//             <div className="py-4 space-y-4">
//               <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a>
//               <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
//               <a href="#qualification" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Qualification</a>
//               <a href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
//               <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
//               <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
//               <button 
//                 onClick={toggleTheme}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 {theme === 'dark' ? 
//                   <Sun className="w-5 h-5 text-primary" /> : 
//                   <Moon className="w-5 h-5 text-primary" />
//                 }
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#qualification', label: 'Qualification' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-secondary-dark/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold text-primary">
            Sahab Noor
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-primary hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 
                <Sun className="w-5 h-5" /> : 
                <Moon className="w-5 h-5" />
              }
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-primary hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;