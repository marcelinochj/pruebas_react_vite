import React, { useState } from 'react'
import { mockGifs } from './mocks/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/previousSearches'
import { GifsList } from './gifs/components/GifsList'
export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['second'])

    const handleTermClicked = (search: string) => {
        console.log({search});
    }

    const handleSearch = (query: string) => {
        console.log(query);
    }

    return (
    <>
        {/*Header*/}
        <CustomHeader title='Buiscador de Gifs' desciption='Descubre y comparte'/>

        <SearchBar placeholer='Buscar Gif' onQuery={handleSearch}/>

        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

        <GifsList gifs={mockGifs}/>
    </>
  )
}
