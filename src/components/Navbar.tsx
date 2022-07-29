import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SocialLinks from './SocialLinks';

const navbarLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '#about',
    },
    {
        name: 'Skills',
        url: '#skills',
    },
    {
        name: 'Projects',
        url: '#projects',
    },
    {
        name: 'Contact',
        url: '#contact',
    },
]

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
    <div className='fixed w-full h-20 shadow-xl bg-gray-200 z-50'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src='/assets/PGramLogov2.png' alt='' width='150' height='100' />
            <div>
                <ul className='hidden md:flex'>
                    {navbarLinks.map(link => {
                        return (
                            <Link href={link.url}>
                                <li className='ml-10 text-sm uppercase box-border border-b hover:border-b-[#333] ease-in duration-100'>{link.name}</li>
                            </Link>
                        );
                    })}
                </ul>
                <div className='md:hidden' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
            
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200' : ''}>
            <div className={
                    nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div className='flex w-full items-center justify-between'>
                    <Image src='/assets/PGramLogov2.png' alt='/' width='120' height='80'/>
                    <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 mb-4'>
                    <p>From Data To Visuals</p>
                </div>
                <div className='py-4 flex flex-col justify-between'>
                    <ul>
                        {navbarLinks.map(link => {
                            return (
                                <Link href={link.url}>
                                    <li className='uppercase py-4 text-sm'>{link.name}</li>
                                </Link>
                            );
                        })}
                    </ul>
                    <div className='pt-40'>
                        <p className='tracking-widest uppercase '>Let's connect</p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Navbar