// import { Mail, Phone } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4">
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
//                   <p className="text-gray-900 dark:text-white">sahabnoor93@gmail.com</p>
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
            
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
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
//                   rows={4}
//                   placeholder="Write your project"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-[1.02]"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("gt4J6h4Wm0h9KG-G-"); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.project,
        to_name: 'Sahab',
        reply_to: formData.email,
        to_email: 'sahabnoor193@gmail.com'
      };

      await emailjs.send(
        "service_z4wqc0x", // Replace with your actual service ID
        "template_ap94fb2", // Replace with your actual template ID
        templateParams
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <Toaster position="top-right" />
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Get in Touch</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Talk to me:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Email</p>
                  <p className="text-gray-900 dark:text-white">sahabnoor193@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">WhatsApp</p>
                  <p className="text-gray-900 dark:text-white">+92 316 4178185</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Write me your project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Write your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Write your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Write your project details"
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;