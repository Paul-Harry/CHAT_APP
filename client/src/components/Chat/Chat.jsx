import classes from "./chat.module.css";

const Chat = ({ from, message, username }) => {
  const isSender = from === username;

  return (
    <li
      className={`${classes.chat} ${
        isSender ? classes.sender : classes.receiver
      }`}
    >
      <p>{message}</p>
    </li>
  );
};
export default Chat;
