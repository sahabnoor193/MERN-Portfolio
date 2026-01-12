// // import { useState } from 'react';

// // const InternshipCard = ({ title, company, date, details }) => {
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   return (
// //     <div 
// //       className={`bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-300 cursor-pointer hover:shadow-xl ${isExpanded ? 'scale-105' : ''}`}
// //       onClick={() => setIsExpanded(!isExpanded)}
// //     >
// //       <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
// //       <p className="text-gray-600 dark:text-gray-400">{company}</p>
// //       <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      
// //       <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
// //         <div className="pt-4 border-t border-gray-200 dark:border-gray-600 mt-2">
// //           <h5 className="font-medium text-gray-900 dark:text-white mb-2">Responsibilities:</h5>
// //           <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
// //             {details.map((detail, index) => (
// //               <li key={index}>{detail}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Qualification = () => {
// //   const internships = [
// //     {
// //       title: "QA Intern",
// //       company: "BitsImages Powered By Socioon",
// //       date: "June 2023 - September 2023",
// //       details: [
// //         "Conducted thorough testing of web applications",
// //         "Created and executed test cases",
// //         "Reported and tracked bugs using JIRA",
// //         "Collaborated with developers to resolve issues"
// //       ]
// //     },
// //     {
// //       title: "Java Backend Intern",
// //       company: "IATech Solutions",
// //       date: "July 2024 - Present",
// //       details: [
// //         "Developing RESTful APIs using Spring Boot",
// //         "Working with MySQL databases",
// //         "Implementing security features",
// //         "Writing unit tests for backend services"
// //       ]
// //     }
// //   ];

// //   return (
// //     <section id="qualification" className="py-20 bg-white dark:bg-gray-800">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Qualification</h2>
// //         <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Experience & Education</p>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           <div>
// //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
// //             <div className="space-y-6">
// //               <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
// //                 <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
// //                 <p className="text-gray-600 dark:text-gray-400">Kinnaird College of Women University</p>
// //                 <p className="text-sm text-gray-500 dark:text-gray-400">2020-present</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Internships</h3>
// //             <div className="space-y-6">
// //               {internships.map((internship, index) => (
// //                 <InternshipCard key={index} {...internship} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Qualification;
// import { motion } from 'framer-motion';
// import { GraduationCap, Briefcase } from 'lucide-react';
// import { useState } from 'react';

// const ExperienceCard = ({ title, company, date, details, expanded, onClick }) => (
//   <motion.div 
//     className={`p-6 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-card)] cursor-pointer transition-all duration-300 ${expanded ? 'shadow-lg' : 'shadow-sm'}`}
//     onClick={onClick}
//     whileHover={{ scale: 1.02 }}
//     layout
//   >
//     <motion.div layout="position" className="flex justify-between items-start">
//       <div>
//         <h4 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h4>
//         <p className="text-[var(--color-text)]">{company}</p>
//         <p className="text-sm text-[var(--color-text)]/60 mt-1">{date}</p>
//       </div>
//       <Briefcase className="text-[var(--color-accent)]" />
//     </motion.div>

//     <motion.div 
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ 
//         opacity: expanded ? 1 : 0,
//         height: expanded ? 'auto' : 0
//       }}
//       transition={{ duration: 0.3 }}
//       className="overflow-hidden"
//     >
//       <div className="pt-4 mt-4 border-t border-[var(--color-primary)]/10">
//         <h5 className="font-medium text-[var(--color-text)] mb-2">Key Responsibilities:</h5>
//         <ul className="list-disc list-inside space-y-2 text-[var(--color-text)]/80">
//           {details.map((detail, index) => (
//             <li key={index} className="transition-all duration-200 hover:pl-1">{detail}</li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   </motion.div>
// );

// const EducationCard = ({ degree, institution, date }) => (
//   <motion.div 
//     className="p-6 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-card)] shadow-sm"
//     whileHover={{ scale: 1.02 }}
//   >
//     <div className="flex justify-between items-start">
//       <div>
//         <h4 className="text-lg font-semibold text-[var(--color-primary)]">{degree}</h4>
//         <p className="text-[var(--color-text)]">{institution}</p>
//         <p className="text-sm text-[var(--color-text)]/60 mt-1">{date}</p>
//       </div>
//       <GraduationCap className="text-[var(--color-accent)]" />
//     </div>
    
//     <div className="pt-4 mt-4 border-t border-[var(--color-primary)]/10">
//       <h5 className="font-medium text-[var(--color-text)] mb-2">Coursework:</h5>
//       <p className="text-[var(--color-text)]/80">
//         OOP, DSA, DB, DAA, MAD, WEB, ML, SQA
//       </p>
//     </div>
//   </motion.div>
// );

// const Qualification = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const experiences = [
//     {
//       title: "Java Backend Intern",
//       company: "IATechSolutions",
//       date: "July 2024 - Present",
//       details: [
//         "Developed RESTful microservices using Spring Boot for e-commerce platform",
//         "Integrated PostgreSQL database with JPA/Hibernate",
//         "Authored and tested REST APIs using Postman",
//         "Collaborated in Agile environment with Git version control"
//       ]
//     },
//     {
//       title: "Web & Content Intern",
//       company: "BitsImages by Socioon",
//       date: "June 2023 - September 2023",
//       details: [
//         "Produced web content using AI tools (BlueWillow, Runway, MidJourney) and Photoshop",
//         "Managed company's social media platforms",
//         "Conducted UX research for interface improvements",
//         "Authored SEO-optimized blog posts"
//       ]
//     }
//   ];

//   return (
//     <section id="qualification" className="py-20 bg-[var(--color-bg)]">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-2">Qualifications</h2>
//           <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
//             My education and professional journey
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-6 flex items-center gap-2">
//               <GraduationCap className="text-[var(--color-accent)]" />
//               Education
//             </h3>
//             <div className="space-y-6">
//               <EducationCard 
//                 degree="Bachelor's in Computer Science" 
//                 institution="Kinnaird College For Women, Lahore" 
//                 date="2021 – 2025" 
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-6 flex items-center gap-2">
//               <Briefcase className="text-[var(--color-accent)]" />
//               Experience
//             </h3>
//             <div className="space-y-6">
//               {experiences.map((exp, index) => (
//                 <ExperienceCard
//                   key={index}
//                   {...exp}
//                   expanded={expandedIndex === index}
//                   onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Qualification;
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const TimelineItem = ({ title, subtitle, date, details, icon, color, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className={`relative pl-10 pb-4 ${!isLast ? 'border-l-2 border-[var(--color-primary)]/20' : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <div 
        className="absolute left-0 w-5 h-5 rounded-full flex items-center justify-center -translate-x-[11px]"
        style={{ backgroundColor: color }}
      >
        <div className="text-white p-1">
          {icon}
        </div>
      </div>
      
      <motion.div 
        className={`bg-[var(--color-card)] rounded-xl p-6 shadow-sm border border-[var(--color-primary)]/10 transition-all duration-300 ${expanded ? 'shadow-lg' : ''}`}
        whileHover={{ y: -3 }}
      >
        <div 
          className="flex justify-between items-start cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-text)]">{title}</h4>
            <p className="text-[var(--color-text)]/80">{subtitle}</p>
            <p className="text-sm text-[var(--color-text)]/60 mt-1">{date}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-[var(--color-primary)]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: expanded ? 1 : 0,
            height: expanded ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-[var(--color-primary)]/10">
            <ul className="space-y-2">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-2">•</span>
                  <span className="text-[var(--color-text)]/80">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Qualification = () => {
  const experiences = [
    {
      title: "Junior QA Analyst",
      subtitle: "Infaque Business Solutions (Pvt) Ltd.",
      date: "July 2025 - December 2025",
      details: [
        "Performed manual testing of web applications including donation forms, subscriptions, campaigns, and events to ensure functional accuracy and usability.",
        "Tested payment-related flows (one-time donations, recurring subscriptions, upgrades, cancellations) across multiple user journeys.",
        "Executed test cases, test scenarios, and bug reports covering edge cases, validations, and regression testing."      ],
      icon: <Briefcase size={14} />,
      color: "#B784A7" // Mauve
    },
    {
      title: "Java Backend Intern",
      subtitle: "IATechSolutions",
      date: "July 2024 - August 2024",
      details: [
        "Developed RESTful microservices using Spring Boot for an e-commerce platform",
        "Integrated PostgreSQL database with JPA/Hibernate for seamless data persistence",
        "Authored and tested REST APIs using Postman",
        "Collaborated in Agile environment with Git version control"
      ],
      icon: <Briefcase size={14} />,
      color: "#B784A7" // Mauve
    },
    {
      title: "Web & Content Intern",
      subtitle: "BitsImages by Socioon",
      date: "June 2023 - September 2023",
      details: [
        "Produced web content using AI-based tools (BlueWillow, Runway, MidJourney) and Adobe Photoshop",
        "Managed company's social media platforms (Facebook, Instagram, Twitter, Pinterest) to grow audience",
        "Conducted UX research to recommend user interface improvements",
        "Authored SEO-optimized blog posts to enhance organic reach"
      ],
      icon: <Briefcase size={14} />,
      color: "#9A94BC" // Lavender
    },
    {
      title: "Bachelor's in Computer Science",
      subtitle: "Kinnaird College For Women",
      date: "2021 – 2025",
      details: [
        "Main coursework: OOP, DSA, DB, DAA, MAD, WEB, ML, SQA",
        "IT Head – Computer Science Club KCWU (2024–2025)",
        "Member, Web Team – ENSOFEST at IEEE Kinnaird Student Branch (2022–2023)",
        "Website developer for IEEE WIE International Leadership Summit 2025"
      ],
      icon: <GraduationCap size={14} />,
      color: "#D4C4DD", // Lilac
      isLast: true
    }
  ];

  return (
    <section id="qualification" className="relative py-8 bg-[var(--color-bg)] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-3">
            Qualifications
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            My professional and academic journey
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;