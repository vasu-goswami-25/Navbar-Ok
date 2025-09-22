import React, { useState } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram,  } from "react-icons/fa";


const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission here
        console.log('Form submitted:', formData);
        // You could also add a temporary message display here instead of an alert
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white flex flex-col font-sans">
            {/* Header */}
            {/* <header className="bg-white dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-700"> */}
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"> */}
                  {/*LEFT: Logo */}
                    {/* <h1 className="text-2xl font-bold">
                    <span style={{ color: "#6334B9" }}>Amoha</span> Codes
                    </h1> */}
                    {/* <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                    </div> */}
                {/* </div> */}
            {/* </header> */}

            {/* Main Content */}
            <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-black rounded-lg p-6 lg:p-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Our Organization</h2>
                        <p className="text-purple-800 dark:text-gray-400 mb-6">We're here to help! Reach out to us with any questions or feedback.</p>
                    </div>
                    
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12 ">
                        <div className="flex items-center justify-center md:justify-start bg-gray-100 dark:bg-gray-800  border border-purple-800 p-4 rounded-lg text-sm sm:text-base gap-2">
                        <Mail className="w-5 h-5 text-[#6334b9]" />
                        <span>amohacodes@gmail.com</span>
                        </div>

                        <div className="flex items-center justify-center md:justify-start bg-gray-100 dark:bg-gray-800   border border-purple-800 p-4 rounded-lg text-sm sm:text-base gap-2">
                        <Phone className="w-5 h-5 text-[#6334b9]" />
                        <span> +91 9760564433</span>
                        </div>

                        <div className="flex items-center justify-center md:justify-start bg-gray-100 dark:bg-gray-800  border border-purple-800 p-4 rounded-lg text-sm sm:text-base gap-2">
                        <MapPin className="w-5 h-5 text-[#6334b9]" />
                        <span>Delhi Road, Moradabad, 244001 India</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Your Name"
                                        className="w-full px-4 py-3 bg-purple-100 dark:bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#6334b9] dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 bg-purple-100 dark:bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#6334b9] dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message..."
                                    className="w-full px-4 py-3 bg-purple-100 dark:bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#6334b9] dark:text-white"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-purple-800"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

    {/* FOOTER */}
        {/* <footer className="bg-purple-700 text-white py-6  "> */}
        {/* <div className="container mx-auto flex flex-col items-center space-y-6"> */}

        {/* Links row */}
        {/* <div className="flex flex-wrap justify-center space-x-14">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
        </div> */}

        {/* Social Icons row */}
        {/* <div className="flex space-x-6"> */}
             {/* LinkedIn */}
                {/* <a href="https://www.linkedin.com/company/amoha-codes/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a> */}
                {/* Facebook */}
                {/* <a href="https://www.facebook.com/share/p/1MFzyWTwpJ/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a> */}
                {/* Instagram */}
                {/* <a href="https://www.instagram.com/amoha_codes_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a> */}
        {/* </div> */}
        
        {/* Copyright row */}
        {/* <p className="text-sm text-center">
            © Copyright <span className="font-bold">Amoha Codes</span>. All Rights Reserved.
        </p> */}
        {/* </div> */}
     {/* </footer> */}
        </div>
    );
};

export default App;
