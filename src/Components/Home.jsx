import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  //below is the tasks,title and description we set using useState funciton
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
  };
  // below we can delete task by clicking button in task componenet function is defined here and called in
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });

    setTasks(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            return setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => {
            return setDescription(e.target.value);
          }}
        ></textarea>

        <button type="submit">ADD</button>
      </form>

      {tasks.map((item, index) => {
        return (
          // Sending values to task componenet using props
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Home;
