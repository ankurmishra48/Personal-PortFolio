import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Contact Information */}
            <div className="mb-6">
              <p className="text-lg font-semibold">Contact Me</p>
              <div className="flex items-center space-x-2 mt-2">
                <FaPhone size={18} />
                <span>+91 7800812399</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <FaEnvelope size={18} />
                <span>mishraankur595@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 text-lg">
              <a href="https://github.com/ankurmishra48" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} className="hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/im_bookish__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/ankur-mishra-7367851b9/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={28} className="hover:text-gray-400 transition duration-300" />
              </a>
            </div>

            {/* Copyright Notice */}
            <div className="mt-8 border-t border-gray-600 pt-6">
              <p className="text-sm text-gray-400">
                &copy; 2025 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
