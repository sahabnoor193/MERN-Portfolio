import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sahab
          </h1>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
            <a href="#qualification" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Qualification</a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? 
                <Sun className="w-5 h-5 text-primary" /> : 
                <Moon className="w-5 h-5 text-primary" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden slide-in">
            <div className="py-4 space-y-4">
              <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a>
              <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
              <a href="#qualification" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Qualification</a>
              <a href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? 
                  <Sun className="w-5 h-5 text-primary" /> : 
                  <Moon className="w-5 h-5 text-primary" />
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;