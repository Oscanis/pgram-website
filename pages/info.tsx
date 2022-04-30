import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

const Info: NextPage = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Useful infos</title>
            <meta name="description" content="Useful information" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="main">

            <div className={styles.card}>
                <p>
                    <a href='https://www.youtube.com/watch?v=OTuHnVvxTDs'>
                        Tutorial video
                    </a>
                </p>
            </div>

            <div className={styles.card}>
                <p>
                    <a href='https://quicktype.io/'>
                        JSON to type quick converter
                    </a>
                </p>
            </div>

        </div>

    </div>
  )
}

export default Info