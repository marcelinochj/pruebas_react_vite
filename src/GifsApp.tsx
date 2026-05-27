import React from 'react'
import { mockGifs } from './mocks/gifs.mock'
export const GifsApp = () => {
  return (
    <>
        {/*Header*/}
        <div className='content-center'>
            <h1>Buscador de Gifs</h1>
            <p>Descubre y comparte los Gifs</p>
        </div>

        <div className="search-container">
            <input type="text" placeholder='Buscar' />
            <button>Buscar</button>
        </div>

        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className='previous-searches-list'>
                <li>Gokú</li>
                <li>Saitama</li>
                <li>The last of us</li>
            </ul>
        </div>

        <div className="gifs-container">
            {
                mockGifs.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x { gif.height} (1.5 mb)
                        </p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
