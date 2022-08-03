import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className='w-full bg-gray-900 p-4'>
        <p className='text-gray-300 text-center'>Copyright © {new Date().getFullYear()} - PGram</p>
    </div>
  )
}

export default Footer