import React, { useState } from 'react';

// Mock data for internships
const internshipCategories = ['Engineering', 'Marketing', 'Design', 'Finance', 'Operations', 'Sales'];

const internships = {
  Engineering: [
    { company: 'Google', title: 'Software Engineer Intern', duration: '3 Months | Remote', image: 'Googlepic.png' },
    { company: 'Cognizant', title: 'Data Analyst Intern', duration: '6 Months | Onsite', image: 'cognizant.png' },
    { company: 'Amazon', title: 'UI/UX Designer Intern', duration: '3 Months | Hybrid', image: 'Amazonpic.png'},
    { company: 'DXC Technology', title: 'User Experience Intern', duration: '6 Months | Onsite', image: 'dxc.png' },
    { company: 'TCS', title: 'Product Design Intern', duration: '3 Months | Onsite', image: 'tcs.png' },
    { company: 'PWC', title: 'Marketing Strategy Intern', duration: '6 Months | Hybrid', image: 'pwc.png' },
  ],
  Marketing: [
    { company: 'HubSpot', title: 'Digital Marketing Intern', duration: '3 Months | Remote', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg' },
    { company: 'Salesforce', title: 'Content Marketing Intern', duration: '6 Months | Hybrid', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg' },
  ],
  Design: [
    { company: 'Adobe', title: 'Graphic Design Intern', duration: '3 Months | Remote', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg' },
    { company: 'Apple', title: 'Product Design Intern', duration: '6 Months | Onsite', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg' },
  ],
  Finance: [
    { company: 'Goldman Sachs', title: 'Financial Analyst Intern', duration: '6 Months | Onsite', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/goldmansachs.svg' },
  ],
  Operations: [
    { company: 'UPS', title: 'Logistics Intern', duration: '3 Months | Onsite', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ups.svg' },
  ],
  Sales: [
    { company: 'Oracle', title: 'Sales Intern', duration: '6 Months | Remote', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg' },
  ]
};

// Component for a single internship card
const InternshipCard = ({ internship }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-purple-400 transform transition duration-200 hover:scale-105  hover:shadow-3xl">
    <img src={internship.image} alt={internship.company} className="w-full h-50 object-contain mb-4 rounded-xl border border-purple-700" />
    <div className="text-purple-700 text-sm font-medium">{internship.company}</div>
    <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
    <div className="text-purple-700 text-sm mb-4">{internship.duration}</div>
    <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
      Apply Now
    </button>
  </div>
);

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Engineering');

  return (
    <div className="font-sans bg-white text-gray-900">
      <main className="container mx-auto p-4 md:p-8">
        {/* Featured Internship section */}
        <section className="my-8 md:my-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Featured Internship</h2>
            <a href="#" className="text-purple-700 font-medium hover:underline">View all</a>
          </div>
          <div className="flex space-x-4 overflow-x-auto mb-6">
            {internshipCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 whitespace-nowrap
                  ${selectedCategory === category
                    ? 'bg-purple-100 text-gray-900'
                    : 'bg-purple-100 text-gray-800 hover:bg-purple-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships[selectedCategory].map((internship, index) => (
              <InternshipCard key={index} internship={internship} />
            ))}
          </div>
        </section>

        {/* --- */}

        {/* Apply for an Internship section */}
        <section className="my-8 md:my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for an Internship</h2>
          <form className="bg-white rounded-2xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter Your Full Name" className="w-full px-4 py-3 rounded-lg border border-purple-300  bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email Address" className="w-full px-4 py-3 rounded-lg border border-purple-300  bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">Stream</label>
              <select id="stream" className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option>Select Your Stream</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Design</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>Sales</option>
              </select>
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
              <div className="relative">
                <input type="file" id="resume" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-purple-300 focus-within:ring-2 focus-within:ring-purple-600">
                  <span className="text-purple-500">Upload Your Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300 shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
