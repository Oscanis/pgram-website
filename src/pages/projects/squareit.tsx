import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { SiAngular, SiNodedotjs, SiMongodb } from 'react-icons/si';

import coverImg from '../../../public/assets/squareit-cover.png';
const title: string = 'SquareIT!';
const subtitle: string = 'MEAN';
const description: string = 'SquareIT! is a small game about rotating squares and matching numbers. This was my first demo written in MEAN stack. Keeping here for reference, currently rewriting it with React and Nest.js. \n NOTE: backend is insecure and not fully fledged, never use real password!';
const siteUrl: string = 'https://pgram.hu/demo/squareit';
const githubUrl: string = 'https://github.com/Oscanis/SquareIt';

const ProjectView = () => {
  return (
    <ProjectDetails
        coverImg={coverImg}
        title={title}
        subtitle={subtitle}
        description={description}
        siteUrl={siteUrl}
        githubUrl={githubUrl}
    >
        <div className='flex flex-column flex-wrap gap-8'>
            <div className='flex items-center gap-4'>
                <SiAngular /> Angular
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiNodedotjs /> Express
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiMongodb /> MongoDB
            </div>
        </div>
    </ProjectDetails>
  )
}

export default ProjectView