// const SkillCard = ({ title, icon }) => (
//     <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//       <img src={icon} alt={title} className="w-12 h-12 mb-2" />
//       <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
//     </div>
//   );
  
//   const Skills = () => {
//     const skills = [
//       { title: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//       { title: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//       { title: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//       { title: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
//       { title: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
//       { title: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
//       { title: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//       { title: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//       { title: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//       { title: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//       { title: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//       { title: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
//       { title: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
//       { title: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
//       { title: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//       { title: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
//       { title: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
//       { title: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
//     ];
  
//     return (
//       <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Skills</h2>
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-12">My technical skills</p>
          
//           <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
//             {skills.map((skill) => (
//               <SkillCard key={skill.title} {...skill} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Skills;
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillCategory = ({ title, skills, accentColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
      }}
      className="bg-white dark:bg-[#1E1A2D] rounded-2xl p-6 shadow-lg border border-[#E9E4F2] dark:border-[#3A3154]"
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-3 h-3 rounded-full" 
          style={{ backgroundColor: accentColor }}
        />
        <h3 className="text-xl font-semibold text-[#2D2643] dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { type: "spring", stiffness: 300 }
              }
            }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-[#F9F7FB] dark:bg-[#2A2139] hover:shadow-sm transition-all"
          >
            <div 
              className="p-2 rounded-md"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-5 h-5 object-contain" 
              />
            </div>
            <span className="text-sm font-medium text-[#4A4A4A] dark:text-[#E8E8E8]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Mastery",
      color: "#9A94BC",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      title: "Backend Systems",
      color: "#B784A7",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "JPA/Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" }
      ]
    },
    {
      title: "Data Management",
      color: "#D4C4DD",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ]
    },
    {
      title: "Languages",
      color: "#FF8C82",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#F5F2F9] dark:bg-[#161120]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2643] dark:text-white mb-4">
            Technical <span className="text-[#9A94BC]">Expertise</span>
          </h2>
          <p className="text-lg text-[#6E6B80] dark:text-[#D4C4DD] max-w-2xl mx-auto">
            A refined collection of technologies I've mastered to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((category, i) => (
            <SkillCategory
              key={i}
              title={category.title}
              skills={category.skills}
              accentColor={category.color}
            />
          ))}
        </div>

        {/* Proficiency meter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white dark:bg-[#1E1A2D] rounded-2xl p-8 shadow-lg border border-[#E9E4F2] dark:border-[#3A3154]"
        >
          <h4 className="text-xl font-semibold text-[#2D2643] dark:text-white mb-6">
            Proficiency Spectrum
          </h4>
          <div className="space-y-5">
            {[
              { skill: "MERN Stack", level: 90, color: "#9A94BC" },
              { skill: "Java/Spring Boot", level: 85, color: "#B784A7" },
              { skill: "RESTful APIs", level: 88, color: "#D4C4DD" },
              { skill: "Database Design", level: 82, color: "#FF8C82" }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#4A4A4A] dark:text-[#E8E8E8]">
                    {item.skill}
                  </span>
                  <span className="text-sm text-[#6E6B80] dark:text-[#D4C4DD]">
                    {item.level}%
                  </span>
                </div>
                <div className="h-2 bg-[#F0EBF7] dark:bg-[#2A2139] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    style={{ backgroundColor: item.color }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;