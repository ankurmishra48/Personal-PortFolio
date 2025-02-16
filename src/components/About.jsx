import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const paragraphLines = [
    "Hello! I am Ankur Mishra, a passionate full-stack developer specializing in the MERN stack.",
    "I thrive on building efficient and scalable web applications, blending creativity with technical expertise.",
    "My journey into development has been fueled by curiosity and a drive to create impactful software solutions.",
    "I am always eager to learn new technologies and stay updated with industry trends.",
    "Beyond coding, I enjoy problem-solving, collaborating on open-source projects, and engaging with the developer community.",
    "My goal is to contribute meaningfully to tech innovations and create seamless digital experiences."
  ];

  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col items-center text-center space-y-6'>
        {/* Title Section with Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl font-extrabold text-red-700'
        >
          About Me
        </motion.h1>
        
        {/* Content Section with Line-by-Line Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='bg-gray-100 p-8 rounded-lg shadow-xl max-w-4xl text-lg md:text-xl leading-relaxed font-medium text-gray-800'
        >
          {paragraphLines.map((line, index) => (
            <motion.p 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              className='mb-2'
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
