import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { SiAdobephotoshop }  from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';

import coverImg from '../../../public/assets/vagrus-cover.png';
const title: string = 'Vagrus';
const subtitle: string = 'Intro & Teaser videos';
const description: string = 'Vagrus is a post-apocalyptic fantasy RPG-strategy hybrid developed by the aspiring Hungarian Indy developer team, Lost Pilgrims. I assisted them with creating the intro video and some teaser trailers.';
const siteUrl: string = 'https://www.vagrus.com';
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
        <div className='flex gap-8'>
            <div className='flex items-center gap-4'>
                <FaVideo /> DaVinci resolve
            </div>
            <span>|</span>
            <div className='flex items-center gap-4'>
                <SiAdobephotoshop /> Photoshop
            </div>
        </div>
    </ProjectDetails>
  )
}

export default ProjectView