import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>PGram - Web Development</title>
      <meta name='description' content='PGram portfolio website. Web development with React, NodeJS or Wordpress' />
      <link rel='icon' href='/assets/pgram-favicon.ico' />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
