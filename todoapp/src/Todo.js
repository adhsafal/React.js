import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react'
import './Todo.css'


const Todo = (props) => {
    return (
        <>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <ListItemText primary={props.text} secondary='Dummy Deadline' />
                    </ListItemAvatar>
                </ListItem>
            </List>
        </>
    )
}

export default Todo;
