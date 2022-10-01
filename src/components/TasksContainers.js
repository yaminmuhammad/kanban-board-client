import React from "react";
import { Link } from "react-router-dom";

const TasksContainer = ({ socket }) => {
  return (
    <div className="container">
      <div className="pending__wrapper">
        <h3>Pending Tasks</h3>
        <div className="pending__container">
          <div className="pending__items">
            <p>Debug the Notification center</p>
            <p className="comment">
              <Link to="/comments">2 Comments</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="ongoing__wrapper">
        <h3>Ongoing Task</h3>
        <div className="ongoing__container">
          <div className="ongoing__items">
            <p>Create designs for Novu</p>
            <p className="comment">
              <Link to="/comments">Add Comment</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="completed__wrapper">
        <h3>Completed Tasks</h3>
        <div className="completed__container">
          <div className="completed__items">
            <p>Debug the Notification center</p>
            <p className="comment">
              <Link to="/comments">2 Comments</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
