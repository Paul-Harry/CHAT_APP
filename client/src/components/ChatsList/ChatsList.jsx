import Chat from "../Chat/Chat";
import classes from "./chatsList.module.css";
import { socket } from "../../connection";
import { useEffect } from "react";

const ChatsList = ({ chats, handleChats, username }) => {
  useEffect(() => {
    socket.on("receive", (data) => {
      handleChats(data);
    });
  });

  return (
    <ul className={classes.chatsList}>
      {chats.map((chat) => (
        <Chat
          key={chat.id}
          from={chat.from}
          message={chat.message}
          username={username}
        />
      ))}
    </ul>
  );
};
export default ChatsList;
