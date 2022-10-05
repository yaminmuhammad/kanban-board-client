import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { socket } from "socket.io-client";

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

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    socket.emit("taskDragged", {
      source,
      destination,
    });
  };

  return (
    <div className="container">
      {/*
      Return an array of each task (Uncomment to view the data structure)

      {Object.entries(tasks).map((task) => console.log(task))}
      */}
      {/* DragDrop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(tasks).map((task) => (
          <div
            className={`${task[1].title.toLowerCase()}__wrapper`}
            key={task[1].title}
          >
            {/* Droppable  */}
            <Droppable droppableId={task[1].title}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {task[1].items.map((item, index) => (
                    // Dragable
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${task[1].title.toLowerCase()}__items`}
                        >
                          <p>{item.title}</p>
                          <p className="comment">
                            <Link to={`/comments/${task[1].title}/${item.id}`}>
                              {item.comments.length > 0
                                ? `View Comments`
                                : "Add Comment"}
                            </Link>
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TasksContainer;
