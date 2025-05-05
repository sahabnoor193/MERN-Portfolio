// import { Github, Linkedin, Mail } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
//             Sahab Noor
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mb-8">Web & App Developer</p>
          
//           <div className="flex flex-wrap justify-center gap-6 mb-8">
//             <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
//               Home
//             </a>
//             <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
//               Skills
//             </a>
//             <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
//               Projects
//             </a>
//           </div>

//           <div className="flex justify-center gap-6">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a
//               href="mailto:example@email.com"
//               className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
//             >
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>

//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               © {new Date().getFullYear()} Sahab Noor. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-[var(--color-bg)] border-t border-[var(--color-primary)]/10 overflow-hidden">
      {/* Background element */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[var(--color-primary)]/5 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
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
          className="text-center"
        >
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-3 inline-block"
          >
            Sahab Noor
          </motion.h2>
          <p className="text-lg text-[var(--color-text)]/80 mb-8">MERN & Backend Developer</p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -3 }}
                className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/sahabnoor193"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sahab-noor-b4ab212b3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:sahabnoor193@gmail.com"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="pt-8 border-t border-[var(--color-primary)]/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[var(--color-text)]/60">
              © {currentYear} Sahab Noor. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;