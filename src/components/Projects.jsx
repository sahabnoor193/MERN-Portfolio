// import { useState } from 'react';
// import { Github, ExternalLink } from 'lucide-react';
// import wie from '../assets/WIE.png';
// import hopeForPaws from '../assets/HopeForPaws.png';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'IEEE-WIE Lahore website',
//       description: 'The official website for the IEEE Women in Engineering (WIE) International Summit held in Lahore, utilizing React.js for a dynamic and responsive user experience. The website serves as a comprehensive platform for attendees to access essential information about the summit, including event schedules, keynote speakers, registration details, and resources.',
//       image: wie,
//       category: 'Web Development',
//       tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
//       demoLink: 'https://ilswielahore2025.com/',
//       githubLink: '#'
//     },
//     {
//       title: 'HopeForPaws Charity Website',
//       description: 'A responsive website for animals that rescues and rehabilitates abandoned animals and shows NGOs & Clinics information where users can adopt animals and post queries related to animal health.',
//       image: hopeForPaws,
//       category: 'Web Development',
//       tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite'],
//       demoLink: '#',
//       githubLink: '#'
//     },
//     {
//       title: 'Anime Streaming Website',
//       description: 'A modern streaming platform for anime enthusiasts with a sleek user interface and real-time updates.',
//       image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800',
//       category: 'Web Development',
//       tech: ['React', 'Node.js', 'MongoDB', 'Express'],
//       demoLink: '#',
//       githubLink: '#'
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Projects</h2>
//         <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Most Recent Work</p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <p className="text-sm text-primary dark:text-primary-dark mb-2">{project.category}</p>
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, techIndex) => (
//                     <span 
//                       key={techIndex}
//                       className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={project.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-primary hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//                   >
//                     <Github className="w-5 h-5" />
//                     Source Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, tech, demoLink, githubLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl bg-[var(--color-card)] border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-500"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></div>
            <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-[var(--color-text)]/80 mb-6">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((techItem, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-text)] rounded-full backdrop-blur-sm"
              >
                {techItem}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[var(--color-primary)]/10 pt-6">
          <div className="flex gap-4">
            {demoLink !== '#' && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {githubLink !== '#' && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)]/80 hover:text-[var(--color-text)] transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </motion.a>
            )}
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="text-[var(--color-primary)]"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 border border-[var(--color-primary)] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'BidMart',
      description: 'Real-time online bidding platform with live auctions, secure payments via Stripe, and admin dashboard. Implemented Socket.IO for real-time bidding updates and chat system between buyers/sellers.',
      tech: ['MERN Stack', 'Socket.IO', 'Tailwind CSS', 'JWT Auth', 'Stripe API'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Hope for Paws',
      description: 'Animal welfare platform connecting NGOs, clinics, and veterinarians. Features include adoption listings, medical case posting, and professional commenting system.',
      tech: ['MERN Stack', 'Tailwind CSS', 'REST APIs', 'Vite'],
      demoLink: 'https://hope-for-paws-official.vercel.app/',
      githubLink: '#'
    },
    {
      title: 'IEEE-WIE Lahore',
      description: 'Official conference website with responsive design, speaker profiles, schedule management, and online registration system for IEEE Women in Engineering Summit.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://ilswielahore2025.com/',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-28 bg-[var(--color-bg)] overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-0 w-64 h-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl -z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Selected <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            Showcasing my most impactful technical implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;