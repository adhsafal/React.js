import React, {useContext} from 'react'
import ComponentC from './ComponentC';
import { FirstName, LastName } from './Appp'

//Here same thing is done like in ComponentC..but using hooks i.e. useContext
const ComponentB = () => {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)

    return (
        <h1>
            My name is {fname} {lname}
        </h1>
    )
}

export default ComponentB;