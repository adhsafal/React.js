import React from 'react'
import { FirstName, LastName } from './Appp'


//inorder to render data in consumer it must be inside function

const ComponentC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>My name is {fname} {lname}</h1>;
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    );
};

export default ComponentC;