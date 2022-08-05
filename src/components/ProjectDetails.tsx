import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi';

type Props = {
    coverImg: any,
    title: string,
    subtitle: string,
    description: string,
    githubUrl?: string,
    siteUrl?: string,
    children?: JSX.Element
};

const ProjectDetails: React.FC<Props> = ({coverImg, title, subtitle, description, githubUrl, siteUrl, children}) => {
  return (
        <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={coverImg} alt=''/>
            <div className='content-container absolute top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20'>
                <h2 className='py-2 px-4'>{title}</h2>
                <h3 className='py-2 px-4'>{subtitle}</h3>
            </div>
        </div>
        <div className='content-container p-4 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='py-2'>Overview</h2>
                <p>{description}</p>
                <div className='mt-8 mb-12 flex gap-8'>
                    {siteUrl &&
                        <button className='w-48' onClick={() => {window.open(siteUrl, '_blank')}}>Site</button>
                    }
                    {githubUrl &&
                        <button className='w-48' onClick={() => {window.open(githubUrl, '_blank')}}>Code</button>
                    }
                </div>
                <p className='pb-4 font-bold'>Technologies</p>
                {children}
                <Link href="/#projects" passHref>
                    <div  className='flex items-center gap-2 my-12 cursor-pointer'><FiArrowLeft />Back</div>
                </Link>
            </div>
        </div>

    </div>  
  )
}

export default ProjectDetails