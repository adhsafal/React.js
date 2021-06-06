import "./App.css";
import React, { useState, useEffect } from "react";
import Message from "./Message";
import { Button, FormControl, IconButton, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //this runs when the app component loads-
    // -basically to import data from database firestore
    //messages in db.collection is the name of collection in firestore
    // onSnapshot is a function that basically-
    //-stores the data everytime database gets upadated
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name."));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([
      ...messages,
      { username: userName, message: input },
      //this appends message along with the username
    ]);
    setInput("");
  };

  return (
    <>
      <div className="App">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=60&h=60"
          alt="logo"
          style={{ marginTop: "20px" }}
        />
        <h1>Messenger</h1>
        <h2>Welcome {userName}</h2>
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              type="text"
              placeholder="Aa" //
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            {!input ? null : (
              <IconButton
                // disabled = {!input}
                className="app__iconButton"
                variant="contained"
                color=""
                type="submit"
                onClick={sendMessage}
              >
                <SendIcon />
              </IconButton>
            )}
          </FormControl>
        </form>
        {/* messages will be displayed here */}
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={userName} message={message} />
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default App;
