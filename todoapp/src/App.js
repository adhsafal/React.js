import './App.css';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads,we need to fetch new todos from the db as they get added/removed
  //useEffect works after the app renders
  useEffect( () => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot( snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []) //the dependencies defines when the useEffect runs

  const addTodo = (event) => {
    event.preventDefault(); // will prevent page from refreshing
    //this will work when we click the onclick 

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //spread operator ""...todos" brings the previous values and input will bring the new value from the input text
    setTodos([...todos, input]);
    setInput(''); //it clears up the input field after submitting
  }

  return (
    <div className="App">
      <h1>Hello!! Safal Adhikari 😄</h1>

      <FormControl>
        <InputLabel>☑️ Write a Todo</InputLabel>
        <Input value={input}
          placeholder="Add new"
          onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        onClick={addTodo}>
        Add Todo
      </Button>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;