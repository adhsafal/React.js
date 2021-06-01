import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <div className='menu_style'>
                <NavLink activeClassName='active_class' to='/about'>About Us</NavLink>
                <NavLink activeClassName='active_class' to='/contact'>Contact</NavLink>
                <NavLink activeClassName='active_class' to='/search'>Search</NavLink>
                <NavLink activeClassName='active_class' to='/services'>Services</NavLink>
                <NavLink activeClassName='active_class' to='/user'>User</NavLink>
            </div>
        </>
    )
}

export default Nav;