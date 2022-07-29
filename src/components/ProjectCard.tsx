import React from 'react';
import Link from 'next/link';

type Props = {
    cardTitle: string,
    cardDetails: string,
    imgUrl: string,
    targetUrl: string
};

const ProjectCard: React.FC<Props> = ({cardTitle, cardDetails, imgUrl, targetUrl}) => {
  return (
    <div className='relative flex justify-center items-center h-auto w-full p-2 shadow-xl rounded-xl bg-gray-100 group hover:bg-gradient-to-r from-orange-400 to-orange-300'>
        <div className='w-full h-full'>
            <img src={imgUrl} alt='' className='object-cover rounded-xl group-hover:opacity-20'/>
            <div className='hidden group-hover:block absolute text-center top-[50%] left-c left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h2>{cardTitle}</h2>
                <p className='py-3'>{cardDetails}</p>
                <Link href={targetUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-orange-100'>Check out</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard