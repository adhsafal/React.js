import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'


const About = (props) => {
    return (
        <>
            <Common 
                name = 'Welcome to About page!'
                img = 'https://picsum.photos/id/1003/367/267'
                visit = '/contact'
                btname = 'Contact now'
            />
        </>
    )
}

export default About
