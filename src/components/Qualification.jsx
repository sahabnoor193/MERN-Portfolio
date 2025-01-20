import { useState } from 'react';

const InternshipCard = ({ title, company, date, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-300 cursor-pointer hover:shadow-xl ${isExpanded ? 'scale-105' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-600 mt-2">
          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Responsibilities:</h5>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Qualification = () => {
  const internships = [
    {
      title: "QA Intern",
      company: "BitsImages Powered By Socioon",
      date: "June 2023 - September 2023",
      details: [
        "Conducted thorough testing of web applications",
        "Created and executed test cases",
        "Reported and tracked bugs using JIRA",
        "Collaborated with developers to resolve issues"
      ]
    },
    {
      title: "Java Backend Intern",
      company: "IATech Solutions",
      date: "July 2024 - Present",
      details: [
        "Developing RESTful APIs using Spring Boot",
        "Working with MySQL databases",
        "Implementing security features",
        "Writing unit tests for backend services"
      ]
    }
  ];

  return (
    <section id="qualification" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Qualification</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Experience & Education</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400">Kinnaird College of Women University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020-present</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Internships</h3>
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <InternshipCard key={index} {...internship} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;