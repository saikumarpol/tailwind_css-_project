import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center text-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>Empowering Developers with Code</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Code. Build. Innovate.</h1>
        
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Learn, Code & Deploy for</p>
          <div>
          <ReactTyped 
            className='md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a] md:pl-4 pl-2'  
            strings={['Full-Stack Development', 'AI & Machine Learning', 'Blockchain', 'Open Source']} 
            typeSpeed={100} 
            backSpeed={80} 
            loop 
          />
          </div>
        </div>

        <p className='md:text-2xl text-xl font-bold text-gray-400 px-4'>
          Master the latest technologies, build projects, and collaborate with a global community of developers.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-3 py-2 text-black'>
  Getting Started
</button>

      </div>
    </div>
  );
};

export default Home;
