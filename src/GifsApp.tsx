import React, { useState } from 'react'
import { mockGifs } from './mocks/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/previousSearches'
import { GifsList } from './gifs/components/GifsList'
export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['second'])

    const handleSearchClicked = (search: string) => {
        console.log({search});
    }

    return (
    <>
        {/*Header*/}
        <CustomHeader title='Buiscador de Gifs' desciption='Descubre y comparte'/>

        <SearchBar placeholer='Buscar Gif'/>

        <PreviousSearches searches={previousTerms} onLabelClicked={handleSearchClicked}/>

        <GifsList gifs={mockGifs}/>
    </>
  )
}
