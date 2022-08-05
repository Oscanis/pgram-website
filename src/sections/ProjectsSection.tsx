import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  return (
    <div id="projects" className='content-wrapper p-2 mt-12 flex flex-col justify-center'>
        <div className='content-container'>
            <h2 className='px-3 pb-6'>Partners and Projects</h2>
        </div>
        <div className='content-container flex flex-wrap justify-center lg:justify-start items-center gap-4'>

            <ProjectCard
                cardTitle='PGram'
                cardDetails='Website'
                imgUrl='/assets/pgram-cover.png'
                targetUrl='/projects/pgram'
            />

            <ProjectCard
                cardTitle='Köki Mall'
                cardDetails='Backend'
                imgUrl='/assets/koki-cover.png'
                targetUrl='/projects/koki'
            />

            <ProjectCard
                cardTitle='Marseus Webshop'
                cardDetails='Website'
                imgUrl='/assets/marseus-cover.png'
                targetUrl='/projects/marseus'
            />

            <ProjectCard
                cardTitle='Dőry Wedding'
                cardDetails='Website'
                imgUrl='/assets/dory-cover.png'
                targetUrl='/projects/dory'
            />

            <ProjectCard
                cardTitle='Vagrus'
                cardDetails='Video &amp; trailers'
                imgUrl='/assets/vagrus-cover.png'
                targetUrl='/projects/vagrus'
            />

            <ProjectCard
                cardTitle='SquareIT!'
                cardDetails='Demo game'
                imgUrl='/assets/squareit-cover.png'
                targetUrl='/projects/squareit'
            />

        </div>
    </div>
  )
}

export default ProjectsSection