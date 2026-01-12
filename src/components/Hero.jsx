// // import { Github, Linkedin, Mail, Download } from 'lucide-react';

// // const Hero = () => {
// //   return (
// //     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
// //       <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
// //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient mb-4">
// //           Hi, I'm Sahab Noor
// //         </h1>
// //         <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
// //           CS Student
// //         </h2>
        
// //         <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
// //           <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full blur-lg opacity-75"></div>
// //           <img
// //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256"
// //             alt="Profile"
// //             className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
// //           />
// //         </div>

// //         <div className="max-w-2xl mb-8">
// //           <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
// //             Passionate about designing websites and learning new stacks
// //           </p>
          
// //           <a 
// //             href="/resume.pdf" 
// //             download
// //             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
// //           >
// //             <Download className="w-5 h-5 mr-2" />
// //             Download Resume
// //           </a>
// //         </div>

// //         <div className="flex gap-4">
// //           <a 
// //             href="https://github.com" 
// //             target="_blank" 
// //             rel="noopener noreferrer" 
// //             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
// //           >
// //             <Github className="w-6 h-6" />
// //           </a>
// //           <a 
// //             href="https://linkedin.com" 
// //             target="_blank" 
// //             rel="noopener noreferrer"
// //             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
// //           >
// //             <Linkedin className="w-6 h-6" />
// //           </a>
// //           <a 
// //             href="mailto:example@email.com"
// //             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
// //           >
// //             <Mail className="w-6 h-6" />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// ============================================
// OLD CODE - IMAGE-BASED VERSION (COMMENTED OUT)
// ============================================
// import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { useEffect } from 'react';
// import resume from '../assets/resumee.pdf';
// import profileImage from '../assets/Sahab.jpeg';

// const Hero = () => {
//   // Mouse position tracking for parallax effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
//   const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [mouseX, mouseY]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };

//   const floatingVariants = {
//     float: {
//       y: [0, -15, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen relative overflow-hidden bg-[var(--color-bg)]">
//       {/* Animated Gradient Background */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{
//           background: `linear-gradient(135deg, 
//             var(--color-primary) 0%, 
//             var(--color-secondary) 30%, 
//             var(--color-bg) 70%)`,
//           opacity: 0.1,
//           x: backgroundX,
//           y: backgroundY
//         }}
//       />
      
//       {/* Floating Particles */}
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-[var(--color-primary)]"
//           style={{
//             width: Math.random() * 10 + 5,
//             height: Math.random() * 10 + 5,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             opacity: 0.3
//           }}
//           animate={{
//             y: [0, (Math.random() - 0.5) * 100],
//             x: [0, (Math.random() - 0.5) * 50],
//             opacity: [0.3, 0.1, 0.3],
//           }}
//           transition={{
//             duration: Math.random() * 10 + 10,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut'
//           }}
//         />
//       ))}
      
//       {/* Geometric Pattern */}
//       <motion.div 
//         className="absolute inset-0 z-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at center, 
//             var(--color-accent) 1px, 
//             transparent 1px)`,
//           backgroundSize: '30px 30px'
//         }}
//         animate={{
//           backgroundPosition: ['0% 0%', '100% 100%']
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: 'linear'
//         }}
//       />
      
//       {/* Animated Blob */}
//       <motion.div
//         className="absolute top-1/4 -left-20 w-96 h-96 rounded-full filter blur-3xl opacity-20"
//         style={{
//           background: `radial-gradient(circle, 
//             var(--color-accent) 0%, 
//             transparent 70%)`
//         }}
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: 'easeInOut'
//         }}
//       />

//       <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
//           {/* Left Column - Text Content */}
//           <motion.div 
//             className="space-y-6 md:space-y-8 text-center md:text-left"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
//               <motion.p 
//                 className="text-[var(--color-accent)] font-medium tracking-wide"
//                 variants={itemVariants}
//               >
//                 WELCOME TO MY PORTFOLIO
//               </motion.p>
//               <motion.h1 
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight"
//                 variants={itemVariants}
//               >
//                 Hi, I'm{' '}
//                 <span className="text-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
//                   Sahab Noor
//                 </span>
//               </motion.h1>
//               <motion.p 
//                 className="text-lg md:text-xl text-[var(--color-text)]/80 max-w-lg mx-auto md:mx-0"
//                 variants={itemVariants}
//               >
//                 A passionate CS student and developer crafting beautiful digital experiences through code.
//               </motion.p>
//             </motion.div>

//             <motion.div 
//               className="flex flex-wrap justify-center md:justify-start gap-4"
//               variants={itemVariants}
//             >
//               <motion.a 
//                 href={resume} 
//                 download
//                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span className="relative z-10 flex items-center">
//                   <Download className="w-5 h-5 mr-2" />
//                   Download Resume
//                   <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
//                 </span>
//               </motion.a>
              
//               <motion.div 
//                 className="flex items-center gap-4"
//                 variants={itemVariants}
//               >
//                 <motion.a 
//                   href="https://github.com/sahabnoor193" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                   <Github className="w-5 h-5 relative z-10" />
//                 </motion.a>
//                 <motion.a 
//                   href="https://www.linkedin.com/in/sahab-noor-b4ab212b3/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                   <Linkedin className="w-5 h-5 relative z-10" />
//                 </motion.a>
//                 <motion.a 
//                   href="mailto:sahabnoor193@gmail.com"
//                   className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                   <Mail className="w-5 h-5 relative z-10" />
//                 </motion.a>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Image */}
//           <motion.div 
//             className="relative mt-8 md:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5, type: 'spring' }}
//           >
//             <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 aspect-square mx-auto">
//               {/* Animated Background Circles */}
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-full blur-3xl"
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               />
              
//               {/* Profile Image */}
//               <motion.div 
//                 className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10"
//                 variants={floatingVariants}
//                 animate="float"
//                 style={{
//                   boxShadow: `0 20px 50px -10px var(--color-primary)`
//                 }}
//               >
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Floating Elements */}
//               <motion.div 
//                 className="absolute -top-4 -right-4 bg-[var(--color-accent)]/10 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg border border-[var(--color-primary)]/10 z-20"
//                 variants={floatingVariants}
//                 animate="float"
//                 custom={1}
//               >
//                 <p className="text-sm md:text-base text-[var(--color-text)] font-medium">CS Student</p>
//               </motion.div>
//               <motion.div 
//                 className="absolute -bottom-4 -left-4 bg-[var(--color-primary)]/10 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg border border-[var(--color-primary)]/10 z-20"
//                 variants={floatingVariants}
//                 animate="float"
//                 custom={2}
//               >
//                 <p className="text-sm md:text-base text-[var(--color-text)] font-medium">Web Developer</p>
//               </motion.div>
              
//               {/* Pulsing Ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] opacity-0"
//                 animate={{
//                   scale: [1, 1.2],
//                   opacity: [0, 0.3, 0]
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeOut"
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// ============================================
// NEW CODE - CODE VISUALIZATION VERSION (ACTIVE)
// ============================================
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import resume from '../assets/resumee.pdf';

const Hero = () => {
  // Mouse position tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const backgroundX = useTransform(mouseX, (latest) => {
    if (typeof window !== 'undefined') {
      return (latest / window.innerWidth) * 100 - 50;
    }
    return 0;
  });
  const backgroundY = useTransform(mouseY, (latest) => {
    if (typeof window !== 'undefined') {
      return (latest / window.innerHeight) * 100 - 50;
    }
    return 0;
  });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[var(--color-bg)]">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            var(--color-primary) 0%, 
            var(--color-secondary) 30%, 
            var(--color-bg) 70%)`,
          opacity: 0.1,
          x: backgroundX,
          y: backgroundY
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--color-primary)]"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
      
      {/* Geometric Pattern */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, 
            var(--color-accent) 1px, 
            transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Animated Blob */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full filter blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, 
            var(--color-accent) 0%, 
            transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-4 md:pb-6 lg:pb-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[75vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 md:space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
              <motion.p 
                className="text-[var(--color-accent)] font-medium tracking-wide"
                variants={itemVariants}
              >
                WELCOME TO MY PORTFOLIO
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="text-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                  Sahab Noor
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-[var(--color-text)]/80 max-w-lg mx-auto md:mx-0"
                variants={itemVariants}
              >
                A passionate CS graduate and developer crafting beautiful digital experiences through code.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href={resume} 
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://github.com/sahabnoor193" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <Github className="w-5 h-5 relative z-10" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sahab-noor-b4ab212b3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <Linkedin className="w-5 h-5 relative z-10" />
                </motion.a>
                <motion.a 
                  href="mailto:sahabnoor193@gmail.com"
                  className="p-3 rounded-full bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] transition-all duration-300 shadow-sm relative overflow-hidden group"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <Mail className="w-5 h-5 relative z-10" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Code Visualization */}
          <motion.div 
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-3xl blur-3xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Code Terminal Window */}
              <motion.div 
                className="relative bg-[var(--color-bg)]/80 backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--color-primary)]/20 p-6 z-10"
                variants={floatingVariants}
                animate="float"
                style={{
                  boxShadow: `0 20px 50px -10px var(--color-primary)`
                }}
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <Terminal className="w-4 h-4 inline-block mr-2 text-[var(--color-primary)]" />
                    <span className="text-xs text-[var(--color-text)]/60 font-mono">terminal</span>
                  </div>
                </div>
                
                {/* Code Lines */}
                <div className="space-y-2 font-mono text-sm">
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-[var(--color-accent)]">const</span>
                    <span className="text-[var(--color-text)]">developer</span>
                    <span className="text-[var(--color-text)]">=</span>
                    <span className="text-[var(--color-primary)]">'Sahab'</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-[var(--color-accent)]">let</span>
                    <span className="text-[var(--color-text)]">skills</span>
                    <span className="text-[var(--color-text)]">=</span>
                    <span className="text-[var(--color-primary)]">['React', 'Node', 'MongoDB']</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <span className="text-[var(--color-accent)]">function</span>
                    <span className="text-[var(--color-text)]">build()</span>
                    <span className="text-[var(--color-text)]">{'{'}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 ml-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <span className="text-[var(--color-text)]">return</span>
                    <span className="text-[var(--color-primary)]">'innovative'</span>
                    <span className="text-[var(--color-text)]">;</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="text-[var(--color-text)]">{'}'}</span>
                  </motion.div>
                  
                  {/* Animated Cursor */}
                  <motion.div
                    className="inline-block w-2 h-4 bg-[var(--color-primary)] ml-2"
                    animate={{
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-[var(--color-accent)]/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[var(--color-primary)]/10 z-20"
                variants={floatingVariants}
                animate="float"
                custom={1}
              >
                <Code className="w-6 h-6 text-[var(--color-accent)]" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-[var(--color-primary)]/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[var(--color-primary)]/10 z-20"
                variants={floatingVariants}
                animate="float"
                custom={2}
              >
                <Cpu className="w-6 h-6 text-[var(--color-primary)]" />
              </motion.div>
              
              {/* Geometric Shapes */}
              <motion.div
                className="absolute top-1/2 -right-12 w-24 h-24 border-2 border-[var(--color-primary)]/30 rounded-lg"
                animate={{
                  rotate: [0, 90, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 -left-8 w-16 h-16 border-2 border-[var(--color-accent)]/30 rounded-full"
                animate={{
                  rotate: [0, -90, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl border-2 border-[var(--color-primary)] opacity-0"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;