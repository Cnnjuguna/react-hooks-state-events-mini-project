import React, { useState }  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const tasks = TASKS;
  const categs = CATEGORIES;

  const [selectedCategory, setSelectedCategory] = useState("All")

  
  const filteredTasks = tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory);
  
  
  function handleCategoryClick(e) {
    setSelectedCategory(e.target.textContent);
    // const text = node.textContent;);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categs={CATEGORIES} onChangeCategory={handleCategoryClick} value={selectedCategory} />
      <NewTaskForm categs={CATEGORIES} />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
