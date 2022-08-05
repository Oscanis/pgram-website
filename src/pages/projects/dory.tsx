import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import coverImg from '../../../public/assets/dory-cover.png';
const title: string = 'Dőry Wedding Homepage';
const subtitle: string = 'Wordpress';
const description: string = 'A Wordpress-based introduction page for a small and cozy wedding dress & accessories shop';
const siteUrl: string = 'https://www.doryeskuvo.hu';
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
                <FaWordpress /> Wordpress
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiAdobephotoshop /> Photoshop
            </div>
        </div>
    </ProjectDetails>
  )
}

export default ProjectView