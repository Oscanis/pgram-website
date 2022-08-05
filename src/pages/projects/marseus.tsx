import React from 'react';

import ProjectDetails from '../../components/ProjectDetails';

import { FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiWoo, SiPhp } from 'react-icons/si';

import coverImg from '../../../public/assets/marseus-cover.png';
const title: string = 'Marseus Computer';
const subtitle: string = 'Wordpress / Woocommerce';
const description: string = 'I had the opportunity to create the international B2B Webshop for Marseus Computer, a company specialised in refurbishing and trading used computers, laptops and accessories';
const siteUrl: string = 'https://www.marseus.com';
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
                <SiWoo /> WooCommerce
            </div>
            <span className='hidden lg:block'>|</span>
            <div className='flex items-center gap-4'>
                <SiPhp /> PHP
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