import { Button, Input, InputLabel, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import UpdateIcon from '@material-ui/icons/Update';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '20px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Todo = (props) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const [input, setInput] = useState()

    const handleopen = () => {
        setOpen(true);
    }

    const updateTodos = () => {
        //updates the todo with the edit text

        db.collection('todos').doc(props.todo.id).set({
            todo: input,
        }, {merge: true})
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Modal.</h1>
                    <InputLabel>☑️ Edit your todo</InputLabel>
                    <Input value={input}
                        placeholder={props.todo.todo}
                        onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodos}><UpdateIcon /></Button>
                </div>
            </Modal>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <ListItemText primary={props.todo.todo} secondary='Dummy Deadline' />
                    </ListItemAvatar>
                </ListItem>
                <Button onClick={e => setOpen(true)}><EditIcon /></Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}> <DeleteIcon /> </Button>
            </List>
        </>
    )
}

export default Todo;
