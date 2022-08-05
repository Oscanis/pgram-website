import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { SiPostgresql, SiNestjs, SiNextdotjs, SiPostman, SiHeroku } from 'react-icons/si';

import coverImg from '../../../public/assets/koki-cover.png';
const title: string = 'Köki Shopping Mall';
const subtitle: string = 'Nest.js / Next.js';
const description: string = 'Under the banner of 5Mart Studio I am heavily involved in building ang upgrading the backend for Köki Shopping Mall mobile app for Android and IOS. Using Postgres as the database layer, Nest.js as the backend API and Next.js as the admin management platform, this is a really complex project with agile collaboration between colleagues.';
const siteUrl: string = 'https://kokiterminal.hu/';
const githubUrl: string = '';

const ProjectView = () => {
  return (
    <ProjectDetails
        coverImg={coverImg}
        title={title}
        subtitle={subtitle}
        description={description}
        siteUrl={siteUrl}
    >
        <div className='flex flex-column flex-wrap gap-8'>
            <div className='flex items-center gap-4'>
                <SiNestjs /> Nest.js
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiPostgresql /> PostgreSQL
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiPostman /> Postman
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiNextdotjs /> Next.js
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiHeroku /> Heroku
            </div>

        </div>
    </ProjectDetails>
  )
}

export default ProjectView