import React from 'react';
import WhyChooseAmoha from "../components/WhyChooseAmoha"
import Careers from "../components/Careers"

// Mock data for the featured courses
const featuredCourses = [
  {
    category: 'Programming',
    title: 'Full Stack Web Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
  },
  {
    category: 'Business',
    title: 'Digital Marketing Mastery',
    description: 'Become a digital marketing expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
  },
  {
    category: 'Design',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
  },
  {
    category: 'Business',
    title: 'Product Management Essentials',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
  },
  {
    category: 'Programming',
    title: 'Data Science & Machine Learning',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
  },
  {
    category: 'Cloud Computing',
    title: 'Cloud Computing with AWS',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
  },
];


// Component for a single course card
const CourseCard = ({ course }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-purple-700 dark:border-purple-500 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col w-82">
    <img src={course.image} alt={course.title} className="w-full h-50 object-cotain mr-4 p-4 rounded-2xl" />
    <div className="p-4 ">
      <div className="text-sm font-medium text-purple-800 dark:text-gray-400 mb-2">{course.category}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
      <p className="text-purple-800 dark:text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>
      <div className="flex items-center mb-4">
        <span className="text-gray-900 mr-1">{course.rating.toFixed(1)}</span>
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-900 dark:text-gray-400 text-sm ml-2">({course.reviews})</span>
      </div>
      <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
        Enroll Now
      </button>
    </div>
  </div>
);

// Main App component
export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <main className="container mx-auto p-4 md:p-8">
        

        {/* IN THIS PLACE ADD WHY CHOOSE AMOHA */}
        <WhyChooseAmoha />

        {/* Featured Courses section */}
        <section className="my-8 md:my-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <a href="#" className="text-purple-800 font-medium hover:underline">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>

         {/* IN THIS PLACE ADD CAREERS CALL */}

        <Careers/>
      </main>
    </div>

    
  );
}
