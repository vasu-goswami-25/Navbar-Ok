import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram,  } from "react-icons/fa";


const Footer = () => {
  return (
<footer style={{ backgroundColor: "#6334B9" }} className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top 3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Amoha Codes</h3>
            <p>Delhi Road</p>
            <p>Moradabad, 244001</p>
            <p>Phone: +91 9760564433</p>
            <p>Email: amohacodes@gmail.com</p>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Terms of service</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Programming Languages</a></li>
              <li><a href="#" className="hover:underline">Data Structure and Algorithm</a></li>
              <li><a href="#" className="hover:underline">Competitive Programming</a></li>
              <li><a href="#" className="hover:underline">System Design</a></li>
              <li><a href="#" className="hover:underline">Career Counseling</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex justify-between items-center border-t border-white/20 mt-8 pt-4">
            <div className="text-sm">
                © Copyright <strong>Amoha Codes</strong>. All Rights Reserved
            </div>
            <div className="flex space-x-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/amoha-codes/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/p/1MFzyWTwpJ/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/amoha_codes_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={22} className="hover:text-purple-400 transition-colors duration-200" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
