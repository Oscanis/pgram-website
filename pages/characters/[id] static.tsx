import { NextPage } from 'next'
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

//build-phase generation from api, just like in index.tsx to get the path id-s for the char subpages
export async function getStaticPaths() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results }: GetCharacterResults = await res.json();

    return {
        paths: results.map( (character) => {
            return {params: {id: String(character.id)}}
        }),
        fallback: false
    }
}

//build-phase generation for the character pages
export async function getStaticProps({params}: {params: {id:string}}) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)

    const character = await res.json();
    return {
        props: {
            character
        }
    }
}


export default CharacterPage