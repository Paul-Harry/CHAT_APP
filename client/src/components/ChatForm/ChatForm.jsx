import { useState } from "react";
import classes from "./chatForm.module.css";
import { VscSend } from "react-icons/vsc";
import { socket } from "../../connection/index.js";
import { v4 as uuidv4 } from "uuid";
const ChatForm = ({username}) => {
  const [message, setMessage] = useState("");

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!message) return;
    socket.emit("send", {
      id: uuidv4(),
      from: username,
      message,
    });
    setMessage("");
  };

  return (
    <div className={classes.chatForm}>
      <textarea
        placeholder="Taper un message"
        value={message}
        onChange={handleMessage}
      ></textarea>
      <button onClick={handleSendMessage}>
        <VscSend size={25} />
      </button>
    </div>
  );
};
export default ChatForm;
