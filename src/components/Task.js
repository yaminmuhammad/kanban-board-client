import React from "react";
import socketIO from "socket.io-client";
import AddTask from "./AddTask";
import Nav from "./Nav";
import TaskContainer from "./TaskContainer";

// Pass socket.io into the required components where
// communications are made with the server
const socket = socketIO.connect("http://localhost:4000");

const Task = () => {
  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TaskContainer socket={socket} />
    </div>
  );
};

export default Task;
