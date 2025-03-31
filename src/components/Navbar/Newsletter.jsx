import React from 'react';

const Newsletter = () => {
  return (
    <div className='text-white w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 items-center'>
        
        {/* Left Section - Headline & Text */}
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want Coding Tips & Tricks to Improve Your Skills?
          </h1>
          <p>Subscribe to our newsletter and get exclusive coding guides, challenges, and latest updates.</p>
        </div>

        {/* Right Section - Email Input & Button */}
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='bg-transparent border-b border-white text-white p-2 w-full focus:outline-none'
            />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium px-3 py-2 text-black'>
              Subscribe
            </button>
          </div>
          <p className='text-gray-400 mt-2 text-sm'>
            We care about your privacy. Read our <span className='text-[#00df9a] cursor-pointer'>Privacy Policy</span>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
