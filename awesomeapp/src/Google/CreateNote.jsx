import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const expandIt =()=>{
        setExpand(true)
    }


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.value;

        const { name, value } = event.target; //object destructuring

        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <>
            <div className='main_note'>
                <form>
                    <input 
                        type= 'text'
                        name='title'
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete="off"
                        onClick={expandIt} />
                        <br/>
                    {expand?
                    <textarea
                        rows=''
                        column=''
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        placeholder='Write a note...'
                       
                    >
                    </textarea>:null}

                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon />
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;