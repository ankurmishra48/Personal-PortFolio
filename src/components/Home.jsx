import React, { useState } from 'react';
import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import pic from "../../public/ankurr.png";
import Resume from "../../public/ANKUR_MISHRA_CV.pdf";
import Contact from './Contact';  

function Home() {
  const [showContact, setShowContact] = useState(false); 

  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-15'>
        <div className='flex flex-col md:flex-row'>
          <div className="md:w-1/2 mt-24 md:mt-36 space-y-2 order-2 md:order-1">
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
                I am a curious and driven individual with a passion for problem-solving and innovation.
              I thrive in dynamic environments that challenge me to think critically and push boundaries.
              My approach is both analytical and adaptable, allowing me to break down complex problems and develop effective solutions.
              I am always eager to learn, grow, and evolve, continuously exploring new ideas and technologies to bridge the gap between
              theory and real-world application. With a strong sense of dedication and collaboration, I seek opportunities where I can
              contribute meaningfully while expanding my expertise in a forward-thinking environment.
             </p>
            <br />

            {/* Social media icons */}
            <div className='flex flex-col text-center md:flex-row justify-between space-y-6 md:space-y-0'>
  <div className='space-y-2'>
    <h1 className='text-2xl font-bold'>Available on</h1>
    <ul className='flex space-x-5'>
      <li>
        <a 
          href='https://www.linkedin.com/in/ankur-mishra-7367851b9/' 
          target='_blank' 
          rel='noreferrer'
        >
          <FaLinkedin className='text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:text-blue-600 duration-300' />
        </a>
      </li>
      <li>
        <a 
          href="https://web.telegram.org/k/" 
          target='_blank' 
          rel='noreferrer'
        >
          <FaTelegram className='text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:text-blue-500 duration-300' />
        </a>
      </li>
      <li>
        <a 
          href="https://github.com/ankurmishra48" 
          target='_blank' 
          rel='noreferrer'
        >
          <FaGithub className='text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:text-gray-700 duration-300' />
        </a>
      </li>
      <li>
        <a 
          href="https://www.instagram.com/im_bookish__/" 
          target='_blank' 
          rel='noreferrer'
        >
          <FaInstagram className='text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:text-pink-600 duration-300' />
        </a>
      </li>
    </ul>
  </div>


              {/* Hire Me and Resume buttons */}
              <div className='space-y-2 animate-fade-in'>
  <h1 className='text-2xl font-bold'>Quick Actions</h1>
  <div className='flex space-x-4'>
    {/* Button with Animation */}
    <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                 hover:bg-blue-700 hover:scale-105 transform 
                 transition-all duration-300 shadow-md hover:shadow-lg"
      onClick={() => setShowContact(true)}
    >
      Hire Me
    </button>

    {/* Resume Download Button with Animation */}
    <a 
      className="bg-gray-600 text-white px-4 py-2 rounded-lg 
                 hover:bg-gray-700 hover:scale-105 transform 
                 transition-all duration-300 shadow-md hover:shadow-lg"
      href={Resume}
      download="ANKUR_MISHRA_CV.pdf"
    >
      My Resume
    </a>
  </div>
</div>

            </div>
          </div>

          {/* Profile Image */}
          <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 ml-8 mr-8 order-1'>
            <img src={pic} className='rounded-full w-[450px] h-[450px]' alt="Ankur Mishra" />
          </div>
        </div>
      </div>

      {/*Styled Contact Form Modal */}
{showContact && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">

    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-[650px] max-h-[90vh] overflow-y-auto">

      {/* Close Button */}
      <button
        onClick={() => setShowContact(false)}
        className="absolute top-4 right-4 z-50 bg-red-600 text-white 
                   w-9 h-9 rounded-full flex items-center justify-center 
                   text-xl font-bold hover:bg-red-700 
                   transition-all duration-300 hover:scale-110"
        aria-label="Close contact form"
      >
        ×
      </button>

      {/* Modal Heading */}
      <div className="pt-8 px-6">
        <h2 className="text-2xl font-bold text-center">
          Contact Me
        </h2>
      </div>

      {/* Contact Form */}
      <div className="px-4 pb-6">
        <Contact />
      </div>

    </div>
  </div>
)}
      <br />
      <hr />
    </>
  );
}

export default Home;
