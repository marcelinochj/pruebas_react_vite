import React from 'react'
import { mockGifs } from './mocks/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/previousSearches'
export const GifsApp = () => {
  return (
    <>
        {/*Header*/}
        <CustomHeader title='Buiscador de Gifs' desciption='Descubre y comparte'/>

        <SearchBar placeholer='Buscar Gif'/>

        <PreviousSearches/>

        <div className="gifs-container">
            {
                mockGifs.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x { gif.height} (1.5)
                        </p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
