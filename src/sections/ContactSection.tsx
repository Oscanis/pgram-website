import React from 'react';
import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';

const ContactSection = () => {
  return (
    <div id="contact" className='content-wrapper p-4 mt-12 flex flex-col justify-center'>
      <div className='content-container'>
        <h2 className='px-3 pb-6'>Contact</h2>
       
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 lg:col-span-1 w-full h-full shadow-xl bg-gray-100 shadow-gray-400 rounded-xl p-4'>

            <div className='lg:p-4 h-full'>
              <div className='w-full flex flex-col justify-center items-center'>
                <Image src="/assets/contact-email-envelope.png" alt="" height="150%" width="150%" className='rounded-xl hover:scale-105 ease-in duration-300'/>
                <h2>Peter Makai</h2>
                <h3>@ PGram</h3>
                <p>Fullstack Developer</p>
                <p className='py-4 text-center'>I&apos;m available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
                <SocialLinks />
                </div>
            </div>
          </div>

          <div className='col-span-3 lg:col-span-2 w-full h-auto bg-gray-100 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <ContactDetails />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection