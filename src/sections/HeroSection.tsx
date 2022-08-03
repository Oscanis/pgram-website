import React from 'react';
import SocialLinks from '../components/SocialLinks';

const HeroSection = () => {
  return (
    <div id="home" className='content-wrapper p-2 text-center'>
        <div className='content-container h-full flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>From Data To Visuals</p>
                <h1 className='py-3'>Hi, I'm <span className='text-orange-400'>Peter</span> @PGram</h1>
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