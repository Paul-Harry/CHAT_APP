import { useState } from "react";
import classes from "./login.module.css";

const Login = ({ handleUsername }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUsername(name);
    localStorage.setItem("username", name);
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__header}>
        <p>Chat App</p>
      </div>

      <div className={classes.login__main}>
        <h1>
          Connectez-vous facilement
          <br />
          avec vos amis
        </h1>
        <p>La meilleur app pour vos communication</p>
      </div>

      <form className={classes.login__inputs} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nom d'utilisateur"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input type="text" placeholder="Room" /> */}
      </form>
    </div>
  );
};
export default Login;
