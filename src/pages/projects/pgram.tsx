import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { SiReact, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import coverImg from '../../../public/assets/pgram-cover.png';
const title: string = 'Portfolio Page';
const subtitle: string = 'Next.js / Tailwind';
const description: string = 'This page was built as a portfolio, but also as a demo for Next.js and Tailwind';
const siteUrl: string = '';
const githubUrl: string = 'https://github.com/Oscanis/pgram-website';

const ProjectView = () => {
  return (
    <ProjectDetails
        coverImg={coverImg}
        title={title}
        subtitle={subtitle}
        description={description}
        githubUrl={githubUrl}
    >
        <div className='flex flex-column flex-wrap gap-8'>
            <div className='flex items-center gap-4'>
                <SiReact /> React
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiNextdotjs /> Next.js
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiTailwindcss /> Tailwind
            </div>
        </div>
    </ProjectDetails>
  )
}

export default ProjectView