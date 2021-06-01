import React, {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';


const ToDoLists = (props) => {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true);
    }


    return (
        <>
            <div>
                <span><li style = {{ textDecoration: line ? 'line-through' : 'none'}}> {props.text} </li>
                <Button className="deleteIcon" onClick={cutIt} ><DeleteIcon/></Button>
                </span>
            </div>
        </>
    )
}

export default ToDoLists;