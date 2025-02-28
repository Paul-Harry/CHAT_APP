import classes from "./ChatHeader.module.css";

const ChatHeader = ({ username, logout }) => {
  return (
    <div className={classes.chatHeader}>
      <p>
        <b>{username}</b>
      </p>

      <button onClick={logout}>Déconnexion</button>
    </div>
  );
};
export default ChatHeader;
