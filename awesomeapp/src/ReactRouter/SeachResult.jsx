import React, { useState } from 'react'

const SearchResult = (props) => {


    const img = `https://source.unsplash.com/300x300/?${props.name}`

    return (
        <>
            <div>
                <img src={img} alt="Radom pictures" />
            </div>
        </>
    )
}

export default SearchResult;