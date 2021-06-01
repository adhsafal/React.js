import React, { createContext } from 'react'
import ComponentA from './ComponentA'


const FirstName = createContext();
const LastName = createContext();

const Appp = () => {
    return (
        <>
            <FirstName.Provider value={'safal '}>
                <LastName.Provider value={'Adhikari'}>
                    <ComponentA />
                </LastName.Provider>
            </FirstName.Provider>
        </>)
}

export default Appp;
export { FirstName, LastName };