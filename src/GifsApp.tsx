import React from 'react'
import { mockGifs } from './mocks/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/previousSearches'
import { GifsList } from './gifs/components/GifsList'
export const GifsApp = () => {
  


    return (
    <>
        {/*Header*/}
        <CustomHeader title='Buiscador de Gifs' desciption='Descubre y comparte'/>

        <SearchBar placeholer='Buscar Gif'/>

        <PreviousSearches searches={['Goku', 'Dragon Ball']}/>

        <GifsList gifs={mockGifs}/>
    </>
  )
}
