import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  return (
    <div id="projects" className='w-full lg:h-screen p-2 flex flex-col justify-center'>
        <div className='w-full max-w-[1240px] mx-auto'>
            <h2 className='px-3 pb-6'>Projects</h2>
        </div>
        <div className='w-full max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>

            <ProjectCard
                cardTitle='HELLO'
                cardDetails='This will be the description'
                imgUrl='/assets/analytics-925379_1920.jpg'
                targetUrl='/'
            />
        </div>
    </div>
  )
}

export default ProjectsSection