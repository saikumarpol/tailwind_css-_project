import React from 'react';
import { FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-[#00df9a] mb-4">GCC</h1>
          <p className="text-sm text-gray-400">
            Empowering developers with cutting-edge coding resources and real-world projects.
          </p>
          <div className="flex space-x-4 mt-6">
            <FaInstagram className="text-3xl hover:text-[#E4405F] cursor-pointer transition" />
            <FaTwitterSquare className="text-3xl hover:text-[#1DA1F2] cursor-pointer transition" />
            <FaGithubSquare className="text-3xl hover:text-gray-100 cursor-pointer transition" />
            <FaDribbbleSquare className="text-3xl hover:text-[#EA4C89] cursor-pointer transition" />
            <FaFacebookSquare className="text-3xl hover:text-[#1877F2] cursor-pointer transition" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 flex justify-between">
          {/* Column 1 */}
          <div>
            <h6 className="font-medium text-gray-400">Resources</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Tutorials</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Code Snippets</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Open Source</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Documentation</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="font-medium text-gray-400">Courses</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Full-Stack Development</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Data Structures & Algorithms</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Machine Learning</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Blockchain</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">About Us</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Careers</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Partners</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Contact</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Help Center</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">FAQs</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Community Forum</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Report an Issue</li>
            </ul>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GCC. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
