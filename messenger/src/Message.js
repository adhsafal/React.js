import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

//here we are wrapping message functio with forwardRef
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      {/* <p style={{ margin: 0, left: 0 }}>
        {!isUser && `${message.username}`}
        {message.username}
      </p> */}
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "anonymous"}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
