import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className='content-wrapper flex items-center px-3 py-16'>
        <div className='content-container lg:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2 className='px-3 pb-6'>About Me</h2>
                <p className='px-3'>
                After spending 3 years at a TV station as a video editor and sytem administrator and 10 years afterwards as data analyst/SME, I&apos;ve found my calling in full-stack development where both of these areas intersect. I can put both my visual and data skills, aesthetics and algorythmical thinking to good use.
                I have experience in JS environment, namely NestJS and Strapi from backend side and React/NextJS along with understanding of Angular from frontend side.
                My latest &quot;hobby&quot; is BabylonJS and 3D graphics in browsers.
                I have a strong command of English (both verbal and written, using on a daily basis) with some experience in management-type work, but my true career goal is at the technical side.
                </p>
            </div>
            <div className='w-full h-auto m-auto flex justify-center md:justify-start mt-8'>
              <div className='rounded-full shadow-lg shadow-gray-400 m-auto'>
                <Image src='/assets/Makai_Peter_grayscale.jpg' alt='' width='250' height='250' className='rounded-full'/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default AboutSection