// import { Monitor, Smartphone } from 'lucide-react';

// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Services</h2>
//         <p className="text-center text-gray-600 dark:text-gray-400 mb-12">What I Offer</p>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
//             <Monitor className="w-12 h-12 mx-auto mb-4 text-purple-500" />
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Website Development</h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Services that prioritize the best quality and the request of the client, with professional work and customer support
//             </p>
//           </div>

//           <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
//             <Smartphone className="w-12 h-12 mx-auto mb-4 text-purple-500" />
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">App Development</h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Services that prioritize the best quality and the request of the client, with professional work and customer support
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Database } from 'lucide-react';

const ServiceCard = ({ title, description, icon, color }) => {
  const IconComponent = icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-[var(--color-card)] p-8 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center`} style={{ backgroundColor: `${color}20` }}>
          <IconComponent className="w-6 h-6" style={{ color }} />
        </div>
        
        <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">{title}</h3>
        <p className="text-[var(--color-text)]/80">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites with modern frameworks like React and Next.js. Focus on performance, accessibility, and SEO best practices.",
      icon: Monitor,
      color: "#9A94BC"
    },
    {
      title: "Backend Services",
      description: "Robust API development with Node.js, Express, and Spring Boot. Database design, microservices architecture, and cloud integration.",
      icon: Database,
      color: "#B784A7"
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete MERN stack applications with seamless frontend-backend integration. From concept to deployment with CI/CD pipelines.",
      icon: Code,
      color: "#D4C4DD"
    }
  ];

  return (
    <section id="services" className="relative py-16 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            My <span className="text-[var(--color-primary)]">Services</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            Professional solutions tailored to your technical needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;