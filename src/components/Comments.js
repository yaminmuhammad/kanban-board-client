import React, { useState } from "react";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";

const socket = socketIO.connect("http://localhost:4000");

const Comments = () => {
  const [comment, setComment] = useState("");

  const addComent = (e) => {
    e.preventDefault();
    console.log({
      comment,
      userId: localStorage.getItem("userId"),
    });
    setComment("");
  };

  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={addComent}>
        <label htmlFor="comment">Add a Comment</label>
        <textarea
          placeholder="Type your comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          rows={5}
          id="comment"
          name="comment"
          required
        ></textarea>
        <button className="commentBtn">ADD COMMENT</button>
      </form>

      <div className="comment__section">
        <h2>Existing Comments</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Comments;
