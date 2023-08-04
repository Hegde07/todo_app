import React from "react";
import "../App.css";
const Task = ({ list, handleDelete, index }) => {
  return (
    <li className="list-item">
      {list}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={() => handleDelete(index)}
        ></i>
      </span>
    </li>
  );
};

export default Task;
