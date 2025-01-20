import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient mb-4">
          Hi, I'm Sahab Noor
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          CS Student
        </h2>
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full blur-lg opacity-75"></div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </div>

        <div className="max-w-2xl mb-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Passionate about designing websites and learning new stacks
          </p>
          
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:example@email.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;