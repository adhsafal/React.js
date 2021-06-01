import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'


const Home = (props) => {
    return (
        <>
            <Common 
                name = 'Grow your business with us!'
                img = 'https://picsum.photos/536/354'
                visit = '/service'
                btname = 'Get Started'
            />
        </>
    )
}

export default Home
