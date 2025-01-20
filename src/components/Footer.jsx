import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
            Sahab Noor
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Web & App Developer</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Home
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:example@email.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Sahab Noor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;