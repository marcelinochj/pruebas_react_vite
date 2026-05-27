import React from 'react'


interface Props {
  placeholer?: string;
}
export const SearchBar = ({placeholer = 'Buscar'} : Props) => {
  return (
    <>
        <div className="search-container">
            <input type="text" placeholder={placeholer} />
            <button>Buscar</button>
        </div>
    </>
  )
}
