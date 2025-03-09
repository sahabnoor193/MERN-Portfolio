// import { Github, Linkedin, Mail, Download } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient mb-4">
//           Hi, I'm Sahab Noor
//         </h1>
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
//           CS Student
//         </h2>
        
//         <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
//           <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full blur-lg opacity-75"></div>
//           <img
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256"
//             alt="Profile"
//             className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
//           />
//         </div>

//         <div className="max-w-2xl mb-8">
//           <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
//             Passionate about designing websites and learning new stacks
//           </p>
          
//           <a 
//             href="/resume.pdf" 
//             download
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             <Download className="w-5 h-5 mr-2" />
//             Download Resume
//           </a>
//         </div>

//         <div className="flex gap-4">
//           <a 
//             href="https://github.com" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
//           >
//             <Github className="w-6 h-6" />
//           </a>
//           <a 
//             href="https://linkedin.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
//           >
//             <Linkedin className="w-6 h-6" />
//           </a>
//           <a 
//             href="mailto:example@email.com"
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
//           >
//             <Mail className="w-6 h-6" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import resume from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-secondary-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2400')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <p className="text-accent font-medium tracking-wide">WELCOME TO MY PORTFOLIO</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-aleo font-bold text-primary">
                Hi, I'm{' '}
                <span className="text-accent">
                  Sahab Noor
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary/80 max-w-lg mx-auto md:mx-0">
                A passionate CS student and developer crafting beautiful digital experiences through code.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={resume} 
                download
                className="inline-flex items-center px-6 py-3 bg-primary text-secondary-dark rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
                <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/sahabnoor193" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sahab-noor-b4ab212b3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:sahabnoor193@gmail.com"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 aspect-square mx-auto">
              {/* Background Circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-10 rounded-full animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary-dark shadow-2xl">
                <img
                  src="src\assets\Sahab.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent/10 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg">
                <p className="text-sm md:text-base text-primary font-medium">CS Student</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg">
                <p className="text-sm md:text-base text-primary font-medium">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;