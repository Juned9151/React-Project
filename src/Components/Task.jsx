import React from "react";

// below line in task const we get title, description, deleteTask, index from props home
const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>

      <button onClick={() => deleteTask(index)}>-</button>
      {/* above function gets called here but defined in Home.jsx component */}
    </div>
  );
};

export default Task;
