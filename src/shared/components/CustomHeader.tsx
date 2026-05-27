import React from 'react'

interface Props  {
    title: string;
    desciption?: string;
}


export const CustomHeader = ({title, desciption} : Props) => {
  return (
    <>
        <div className="search-container">
            <div className='content-center'>
                <h1>{title}</h1>
                <p>{desciption}</p>
            </div>
        </div>
    </>
  )
}
