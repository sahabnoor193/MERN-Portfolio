// // import { Mail, Phone } from 'lucide-react';

// // const Contact = () => {
// //   return (
// //     <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
// //           Contact Me
// //         </h2>
// //         <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Get in Touch</p>

// //         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
// //           <div className="space-y-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
// //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Talk to me:</h3>
            
// //             <div className="space-y-6">
// //               <div className="flex items-start space-x-4">
// //                 <Mail className="w-6 h-6 text-primary mt-1" />
// //                 <div>
// //                   <p className="text-gray-600 dark:text-gray-400 mb-1">Email</p>
// //                   <p className="text-gray-900 dark:text-white">sahabnoor93@gmail.com</p>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-start space-x-4">
// //                 <Phone className="w-6 h-6 text-primary mt-1" />
// //                 <div>
// //                   <p className="text-gray-600 dark:text-gray-400 mb-1">WhatsApp</p>
// //                   <p className="text-gray-900 dark:text-white">+92 316 4178185</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
// //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Write me your project</h3>
            
// //             <form className="space-y-4">
// //               <div>
// //                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   placeholder="Write your name"
// //                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   placeholder="Write your email"
// //                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                   Project
// //                 </label>
// //                 <textarea
// //                   id="project"
// //                   rows={4}
// //                   placeholder="Write your project"
// //                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
// //                 ></textarea>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-[1.02]"
// //               >
// //                 Submit
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import { useState, useEffect } from 'react';
// import { Mail, Phone, Send } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     project: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     // Initialize EmailJS with your public key
//     emailjs.init("gt4J6h4Wm0h9KG-G-"); // Replace with your actual public key
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.project,
//         to_name: 'Sahab',
//         reply_to: formData.email,
//         to_email: 'sahabnoor193@gmail.com'
//       };

//       await emailjs.send(
//         "service_z4wqc0x", // Replace with your actual service ID
//         "template_ap94fb2", // Replace with your actual template ID
//         templateParams
//       );

//       toast.success('Message sent successfully!');
//       setFormData({ name: '', email: '', project: '' });
//     } catch (error) {
//       toast.error('Failed to send message. Please try again.');
//       console.error('Email error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4">
//         <Toaster position="top-right" />
//         <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
//           Contact Me
//         </h2>
//         <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Get in Touch</p>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           <div className="space-y-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Talk to me:</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <Mail className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <p className="text-gray-600 dark:text-gray-400 mb-1">Email</p>
//                   <p className="text-gray-900 dark:text-white">sahabnoor193@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <Phone className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <p className="text-gray-600 dark:text-gray-400 mb-1">WhatsApp</p>
//                   <p className="text-gray-900 dark:text-white">+92 316 4178185</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Write me your project</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write your name"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write your email"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Project
//                 </label>
//                 <textarea
//                   id="project"
//                   name="project"
//                   value={formData.project}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   placeholder="Write your project details"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   'Sending...'
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("gt4J6h4Wm0h9KG-G-");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_z4wqc0x",
        "template_ap94fb2",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.project,
          to_name: 'Sahab',
          reply_to: formData.email
        }
      );
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[var(--color-bg)] overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl -z-10"
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
            Get In <span className="text-[var(--color-primary)]">Touch</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            Let's discuss your project and how I can help bring it to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-primary)]/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text)]/60 mb-1">Email</p>
                  <p className="text-[var(--color-text)]">sahabnoor193@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text)]/60 mb-1">WhatsApp</p>
                  <p className="text-[var(--color-text)]">+92 316 4178185</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-primary)]/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)]/60 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-primary)]/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]/60 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-primary)]/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="project" className="block text-sm font-medium text-[var(--color-text)]/60 mb-1">
                  Project Details
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-primary)]/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default Contact;