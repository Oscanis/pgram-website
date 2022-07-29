import React from 'react';
import SkillCard from '../components/SkillCard';
import { SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiStrapi, SiGithub } from 'react-icons/si';


const SkillsSection = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2 flex flex-col justify-center'>
        <div className='w-full max-w-[1240px] mx-auto'>
            <h2 className='px-3 pb-6'>Skills</h2>
        </div>
        <div className='w-full max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <SkillCard cardText='React'>
                <SiReact className='w-10 h-10' />
            </SkillCard>

            <SkillCard cardText='Next.js'>
                <SiNextdotjs className='w-10 h-10' />
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

            <SkillCard cardText='Github'>
                <SiGithub className='w-10 h-10' />
            </SkillCard>

        </div>
    </div>
  );
}

export default SkillsSection