import { useState } from "react";
import ChatForm from "./components/ChatForm/ChatForm";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatsList from "./components/ChatsList/ChatsList";
import classes from "./styles/App.module.css";
import Login from "./components/Login/Login";

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [chats, setChats] = useState([]);

  const handleChats = (chat) => {
    setChats([...chats, chat]);
  };

  const handleUsername = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername(null);
    setChats([])
    localStorage.removeItem("username");
  };

  return (
    <div className={classes.app}>
      {username ? (
        <>
          <ChatHeader username={username} logout={logout} />
          <ChatsList
            chats={chats}
            handleChats={handleChats}
            username={username}
          />
          <ChatForm username={username} />
        </>
      ) : (
        <Login handleUsername={handleUsername} />
      )}
    </div>
  );
};

export default App;
