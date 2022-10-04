import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TasksContainer = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    function fetchTasks() {
      fetch("http://localhost:4000/api")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTasks(data);
        });
    }
    fetchTasks();
  }, []);

  return (
    <div className="container">
      {/*
      Return an array of each task (Uncomment to view the data structure)

      {Object.entries(tasks).map((task) => console.log(task))}
      */}
      {Object.entries(tasks).map((task) => {
        <div
          className={`${task[1].title.toLowercase()}__wrapper`}
          key={task[1].title}
        >
          <h3>{task[1].title} Tasks</h3>
          <div className={`${task[1].title.toLowerCase()}__container`}>
            {task[1].items.map((item, index) => (
              <div
                className={`${task[1].title.toLowerCase()}__items`}
                key={item.id}
              >
                <p>{item.title}</p>
                <p className="comment">
                  <Link to="/comments">
                    {item.comments.length > 0 ? `View Comments` : "Add Comment"}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>;
      })}
    </div>
  );
};

export default TasksContainer;
