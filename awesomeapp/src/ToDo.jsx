import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoLists from './ToDoLists';



const ToDo = () => {

    const [item, setItem] = useState("");

    const [newItem, setNewItem] = useState([])

    const itemEvent = (e) => {
        setItem(e.target.value);
    }

    const ListOfItems = () => {
        setNewItem( (prevValue) => {
            return [...prevValue, item]
        })
        setItem("");
        
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br/>
                    <input type='text' 
                    placeholder='Add an Items' 
                    onChange={itemEvent}
                    value = {item}
                    />
                    <Button className="new_btn" onClick={ListOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newItem.map( (val, index) => {
                            return <ToDoLists key={index} text={val} />
                        } )}

                    </ol>
                </div>
            </div>
        </>
    )

}

export default ToDo;