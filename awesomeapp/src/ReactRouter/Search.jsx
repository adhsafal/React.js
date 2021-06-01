import React, { useState } from 'react'
import SearchResult from './SeachResult';

const Search = (props) => {

    const [image, setImage] = useState("");

    const inputEvent = (e) => {
        const data = e.target.value;
        setImage(data);
    }

    return (
        <>
            <div className='searchbar'>
                <h1>Search</h1>
                <input type='text'
                    placeholder="Search anything"
                    onChange={inputEvent}
                    value={image}
                />
                {image === "" ? null:<SearchResult name={image}/>}
            </div>
        </>
    )
}

export default Search;