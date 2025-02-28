import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = app.listen(3000, () =>
  console.log("server started running at http://localhost:3000/")
);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("send", data => {
    console.log(data)

    io.emit("receive", data)
  })
});
