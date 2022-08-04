import React from 'react';
import SocialLinks from '../components/SocialLinks';

const HeroSection = () => {
  return (
    <div id="home" className='content-wrapper'>
        <div className='content-container lg:h-full lg:flex justify-center items-center'>
            <div className='p-2 text-center'>
                <div className='lg:hidden h-32 w-full'></div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>From Data To Visuals</p>
                <h1 className='py-3'>Hi, I&apos;m <span className='text-orange-400'>Peter</span> @PGram</h1>
                <h1 className='py-3'>A Fullstack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Building sites and solutions with cutting-edge technologies like React/Next.js for frontend and NodeJS (NestJS, Strapi) for backend.
                </p>
                <div className='flex justify-center items-center'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroSection