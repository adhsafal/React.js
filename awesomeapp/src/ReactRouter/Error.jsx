import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {


    return(
        <>
            <h1> 404. Page not found !!</h1>
            <NavLink to='/about'>Go Back to homepage!!</NavLink>
        </>
    )
}

export default Error;