import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  return (
    <div className="tasks">
    {tasks.map((task) => <Task key={task} text={task.text} category={task.category} />)}{/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
