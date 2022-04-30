import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Character, GetCharacterResults } from '../../types/types'
import imageLoader from '../../imageLoader'

function CharacterPage({character}: {character: Character}) {
    return (
        <div>
            <h2>{character.name}</h2>
            <Image
                loader={imageLoader}
                unoptimized
                src = {character.image}
                alt = {character.name}
                width="200px"
                height="200px"
            />
        </div>
    )
}

//SSR generation for the character pages
export const getServerSideProps: GetServerSideProps = async (context) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)

    const character = await res.json();
    return {
        props: {
            character
        }
    }
}


export default CharacterPage