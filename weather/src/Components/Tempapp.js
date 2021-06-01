import React, { useEffect, useState } from 'react'
import './css/style.css'

const Tempapp = () => {

    const [city, setCity] = useState(null);

    const [search, setSearch] = useState('Kathmandu')

    useEffect( () => {

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=545f9e132672d4bec52b0f44d1d1e6d6`;
            const response = await fetch(url);
            const resJson = await response.json();

            setCity(resJson.main);

        };


        fetchApi();
    }, [search]);

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type='search'
                        className='inputField'
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {!city ? (
                    <p className="erroMsg">No data found!</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-street-view"></i>
                                {search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°Cel
                            </h1>
                            <h3 className='tempin_max'>
                                Min: {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                            </h3>
                        </div>

                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                    )
                    }
            </div>
        </>
    )
}

export default Tempapp;
