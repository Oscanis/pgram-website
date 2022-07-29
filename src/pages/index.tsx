import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import AboutSection from '../sections/AboutSection';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PGram - Web Development</title>
        <meta name='description' content='PGram portfolio website. Web development with React, NodeJS or Wordpress' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}

export default Home
