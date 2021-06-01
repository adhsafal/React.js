import React from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'


const User = () => {

    const {fname, lname} = useParams();

    const location = useLocation();

    const history = useHistory();

    console.log(history);


    return (
        <>
            <h1> User {fname} {lname} page!!</h1>
            <p>Your location is {location.pathname}</p>

            {location.pathname === '/user/safal/adhikari'? 
                (<button onClick={()=> history.push('/about')}>Click!!</button>): null}

        </>
    )
}

export default User;