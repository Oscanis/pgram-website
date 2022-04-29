import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PGram!</title>
        <meta name="description" content="PGram portfolio website. Web development with Wordpress, React, Node" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href='https://www.youtube.com/watch?v=OTuHnVvxTDs'>
        Tutorial video
      </a>

    </div>
  )
}

export default Home
