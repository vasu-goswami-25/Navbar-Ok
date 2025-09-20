import React, { useState } from 'react';

// Inline SVG Icons
const BinocularsIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M7 12c-2.22 0-4-1.78-4-4S4.78 4 7 4s4 1.78 4 4c0 1.25-.57 2.36-1.46 3.12l-1.47 1.47a1 1 0 01-1.42 0L7 12z"></path>
    <path d="M17 12c-2.22 0-4-1.78-4-4s1.78-4 4-4 4 1.78 4 4c0 1.25-.57 2.36-1.46 3.12l-1.47 1.47a1 1 0 01-1.42 0L17 12z"></path>
    <path d="M12 2v20"></path>
  </svg>
);

const BoxSeamIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M12.58 2.01l-10 4.5v12.5l10-4.5V14l4 2.5v-6.5l-4-2.5V2.01z"></path>
    <path d="M12.58 2.01l10 4.5v12.5l-10-4.5V14l-4 2.5v-6.5l4-2.5z"></path>
  </svg>
);

const BrightnessHighIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const CommandIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3a3 3 0 003-3V6a3 3 0 00-3-3zM6 3a3 3 0 00-3 3v12a3 3 0 003 3a3 3 0 003-3V6a3 3 0 00-3-3z"></path>
    <path d="M12 21V3"></path>
  </svg>
);

const EaselIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M3.75 6.75l8.25-4.5 8.25 4.5v11.5l-8.25 4.5-8.25-4.5V6.75z"></path>
    <path d="M3.75 6.75L12 11.25l8.25-4.5"></path>
  </svg>
);

const MapIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M1 6L9 2l8 4-8 4L1 6z"></path>
    <path d="M1 18l8-4 8 4-8 4L1 18z"></path>
    <path d="M9 2v16"></path>
    <path d="M17 6v16"></path>
  </svg>
);

const featuresData = [
  {
    id: 'features-tab-1',
    title: 'Expert-Led Learning',
    icon: BinocularsIcon,
    iconColor: '#0dcaf0',
    description: [
      'Tailored Teaching: Our instructors adapt their teaching methods to suit beginners and advanced learners alike, ensuring clarity and engagement.',
      'Mentorship Beyond Classes: Receive ongoing guidance, career advice, and support to help you achieve your goals beyond the course curriculum.',
      'Industry-Driven Insights: Learn cutting-edge techniques and technologies directly from professionals actively working in the field.',
    ],
  },
  {
    id: 'features-tab-2',
    title: 'Comprehensive Curriculum',
    icon: BoxSeamIcon,
    iconColor: '#6334b9', // Using the color you specified
    description: [
      'Beginner to Advanced: Our curriculum covers everything from foundational concepts to advanced topics, making it suitable for learners at all levels.',
      'Structured Modules: Courses are broken into easy-to-follow modules, ensuring a clear and progressive learning experience.',
      'Industry-Relevant Content: Stay ahead with a curriculum designed to meet the current demands of the tech and education sectors.',
    ],
  },
  {
    id: 'features-tab-3',
    title: 'Flexible Learning Modes',
    icon: BrightnessHighIcon,
    iconColor: '#20c997',
    description: [
      'Online or Offline Options: Choose between online classes for convenience or offline sessions for hands-on guidance.',
      'Self-Paced Learning: Access recorded sessions and course materials anytime, anywhere, to suit your schedule.',
      'Live Sessions: Interact with instructors during live classes to resolve queries in real-time.',
    ],
  },
  {
    id: 'features-tab-4',
    title: 'Practical, Hands-On Approach',
    icon: CommandIcon,
    iconColor: '#df1529',
    description: [
      'Real-World Projects: Work on industry-standard projects to gain practical experience and build an impressive portfolio.',
      'Interactive Exercises: Engage in coding challenges, case studies, and problem-solving sessions for a deeper understanding of concepts.',
      'Tools and Technologies: Gain proficiency with the latest tools and platforms used in professional environments.',
    ],
  },
  {
    id: 'features-tab-5',
    title: 'Personalized Support',
    icon: EaselIcon,
    iconColor: '#0d6efd',
    description: [
      'One-on-One Mentorship: Get individual attention to address your unique learning needs and challenges.',
      'Dedicated Q&A Support: Clear your doubts quickly with our responsive support team and discussion forums.',
      'Progress Tracking: Regular assessments and feedback help monitor your growth and focus on improvement areas.',
    ],
  },
  {
    id: 'features-tab-6',
    title: 'Career-Ready Skills',
    icon: MapIcon,
    iconColor: '#fd7e14',
    description: [
      'Job-Oriented Training: Acquire skills that align with industry requirements to boost your employability.',
      'Certification: Earn recognized certificates that add value to your resume and showcase your expertise.',
      'Interview Preparation: Enhance your job prospects with mock interviews, resume-building sessions, and career counseling.',
    ],
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('features-tab-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeFeature = featuresData.find(feature => feature.id === activeTab);

  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Amoha?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-300 mb-12">
          At Amoha, we are more than just an educational platform – we are your
          partners in growth and success. Here’s why thousands of learners trust
          us:
        </p>

        <ul className="flex flex-wrap justify-center sm:justify-between space-x-2 sm:space-x-4 mb-8">
          {featuresData.map((feature) => {
            const isActive = activeTab === feature.id;
            const IconComponent = feature.icon;
            return (
              <li key={feature.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
                <button
                  onClick={() => handleTabClick(feature.id)}
                  className={`nav-link w-full flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform ${
                    isActive
                      ? 'bg-[#0dcaf0] text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full mb-2">
                    <IconComponent color={isActive ? '#ffffff' : feature.iconColor} />
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-center mt-2">
                    {feature.title}
                  </h4>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-inner p-6">
          {activeFeature && (
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-full order-2 lg:order-1 text-left">
                <ul className="space-y-4">
                  {activeFeature.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="flex-shrink-0 w-6 h-6 text-[#6334b9] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
