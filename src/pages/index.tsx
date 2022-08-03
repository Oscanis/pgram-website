import type { NextPage } from 'next';

import AboutSection from '../sections/AboutSection';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import ContactSection from '../sections/ContactSection';

import ToTopButton from '../components/ToTopButton';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <div className='w-full flex justify-center pb-12'>
        <ToTopButton />
      </div>
    </>
  )
}

export default Home
