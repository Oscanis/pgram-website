import React from 'react';
import SkillCard from '../components/SkillCard';
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiNestjs,
    SiStrapi,
    SiGithub,
    SiHeroku,
    SiTypescript,
    SiPostgresql,
    SiTrello,
    SiFigma,
    SiAdobephotoshop,
    SiTailwindcss,
    SiPostman
} from 'react-icons/si';

import { FaVideo, FaWordpress } from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <div id="skills" className='content-wrapper p-2 mt-12 flex flex-col justify-center'>
        <div className='content-container'>
            <h2 className='px-3 pb-6'>Skills</h2>
        </div>
        <div className='content-container grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        
            <SkillCard cardText='TypeScript'>
                <SiTypescript className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Node.js'>
                <SiNodedotjs className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Nest.js'>
                <SiNestjs className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Strapi'>
                <SiStrapi className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='React'>
                <SiReact className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Next.js'>
                <SiNextdotjs className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Tailwind'>
                <SiTailwindcss className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='PostgreSQL'>
                <SiPostgresql className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Postman'>
                <SiPostman className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Github'>
                <SiGithub className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Heroku'>
                <SiHeroku className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Trello'>
                <SiTrello className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Figma'>
                <SiFigma className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Photoshop'>
                <SiAdobephotoshop className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='DaVinci Resolve'>
                <FaVideo className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Wordpress'>
                <FaWordpress className='w-10 h-10' />
            </SkillCard>
        </div>
    </div>
  );
}

export default SkillsSection