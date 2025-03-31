import React from 'react';
import Da from '../../assets/da.webp';
import Coding from '../../assets/coding.jpg'


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center'>
        <img src={Coding} alt='Coding Dashboard' className='w-[500px] mx-auto' />
        
        <div className='flex flex-col justify-center text-center md:text-left'>
          <p className='text-[#00df9a] font-bold p-2 uppercase'>Code Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Track Your Coding Progress</h1>
          <p className='text-gray-600'>
            Get real-time insights on your coding journey! Monitor challenges solved, 
            track learning progress, and analyze your growth across different technologies.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-3 py-2'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
