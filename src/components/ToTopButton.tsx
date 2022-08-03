import React from 'react';
import Link from 'next/link';
import { FiChevronsUp } from 'react-icons/fi';

const ToTopButton = () => {
  return (
    <Link href='/'>
        <div className='h-16 w-16 flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
            <FiChevronsUp className='h-16 w-16'/>
        </div>
    </Link>
  )
}

export default ToTopButton