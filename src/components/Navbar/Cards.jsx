import React from 'react';
import Beginner from '../../assets/single.png';
import Intermediate from '../../assets/double.png';
import Advanced from '../../assets/group.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

        {/* Beginner Plan */}
        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Beginner} alt='Beginner Plan' className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-6'>Starter Pack</h2>
          <p className='text-center text-4xl font-bold'>₹499/month</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8'>Access to DSA & Python Basics</p>
            <p className='py-2 border-b mx-8'>2 Guided Projects</p>
            <p className='py-2 border-b mx-8'>Hindi & English Video Lectures</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>
            Start Trial
          </button>
        </div>

        {/* Intermediate Plan */}
        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Intermediate} alt='Intermediate Plan' className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-6'>Pro Developer</h2>
          <p className='text-center text-4xl font-bold'>₹999/month</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8'>Full-Stack Web Dev Course</p>
            <p className='py-2 border-b mx-8'>5+ Real-World Projects</p>
            <p className='py-2 border-b mx-8'>Live Mentorship Sessions</p>
          </div>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>
            Start Trial
          </button>
        </div>

        {/* Advanced Plan */}
        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Advanced} alt='Advanced Plan' className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-6'>Ultimate Coder</h2>
          <p className='text-center text-4xl font-bold'>₹1999/month</p>
          <div className='text-center font-medium mt-6'>
            <p className='py-2 border-b mx-8'>AI/ML & Web3 Bootcamp</p>
            <p className='py-2 border-b mx-8'>Placement Assistance & Mock Interviews</p>
            <p className='py-2 border-b mx-8'>Personalized Career Mentorship</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>
            Start Trial
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cards;
