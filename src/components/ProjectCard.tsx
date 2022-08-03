import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    cardTitle: string,
    cardDetails: string,
    imgUrl: string,
    targetUrl: string
};

const ProjectCard: React.FC<Props> = ({cardTitle, cardDetails, imgUrl, targetUrl}) => {
  return (
    <div className='relative flex justify-center items-center h-[210px] w-[280px] p-2 shadow-xl rounded-xl bg-gray-100 group hover:bg-white'>
        <div className='flex justify-center items-center'>
            <Image className='absolute rounded-xl group-hover:opacity-10' layout='fill' objectFit='cover' src={imgUrl} />
            <div className='hidden group-hover:block w-full p-4 absolute text-center top-[50%] left-c left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h2>{cardTitle}</h2>
                <p className='py-3'>{cardDetails}</p>
                <Link href={targetUrl}>
                    <p className='text-center py-3 rounded-lg bg-orange-400 text-white text-lg cursor-pointer hover:bg-orange-300 ease-in duration-100'>Check out</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard