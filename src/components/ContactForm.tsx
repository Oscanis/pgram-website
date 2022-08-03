import React from 'react';

const ContactForm = () => {
  return (
    <form action="">
        <div className='grid md:grid-cols-2 gap-4 w-full py-1'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-1'>Name</label>
                <input className='border-2 rounded-lg p-1 flex border-gray-300' type="text" />
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-1'>Phone Number</label>
                <input className='border-2 rounded-lg p-1 flex border-gray-300' type="text" />
            </div>
        </div>
        <div className='py-2'>
            <label className='uppercase text-sm py-1'>Email</label>
            <input className='w-full border-2 rounded-lg p-1 flex border-gray-300' type="email" />
        </div>
        <div className='py-2'>
            <label className='uppercase text-sm py-1'>Subject</label>
            <input className='w-full border-2 rounded-lg p-1 flex border-gray-300' type="text" />
        </div>
        <div className='py-2'>
            <label className='uppercase text-sm py-1'>Email</label>
            <textarea className='w-full border-2 rounded-lg p-1 flex border-gray-300' rows={3} />
        </div>
        <button className='w-full mt-2'>Send Message</button>
    </form>
  )
}

export default ContactForm