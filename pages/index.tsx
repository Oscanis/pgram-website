import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types/types'
import imageLoader from '../imageLoader'

const Home: NextPage<{characters: Character[]}> = ({characters}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PGram!</title>
        <meta name="description" content="Rick and Morty Tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {characters.map((character)=> {
        return <div key={character.id}>
          <Link href={`/characters/${character.id}`}>
            <a><h3>{character.name}</h3></a>
          </Link>
          <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width="200px"
            height="200px"
          />
        </div>
      })}

    </div>
  )
}

// -- STATIC DATA FETCHING --
//runs when building the app to get static props for static websites
export const getStaticProps: GetStaticProps = async (context) => {
  //fetching from API
  const res = await fetch("https://rickandmortyapi.com/api/character");
  //destructuring the results using custom type from types.ts
  const { results }: GetCharacterResults = await res.json();

  //returning the results as props so it can be ingested above
  return {
    props: {
      characters: results
    }
  }
}

export default Home
