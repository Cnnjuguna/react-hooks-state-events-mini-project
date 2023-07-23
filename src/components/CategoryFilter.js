import React, { useState } from "react";

function CategoryFilter({categs}) {
  const [selectedCategory, setselectedCategory] = useState("All")

  function name(param) {
    
  }
  

  const filteredTasks = categs.filter((itemCateg) => {return selectedCategory === "All" || itemCateg === selectedCategory});


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categs.map((category)=>{
      return <button key={category} name={selectedCategory}>{category}</button>
      })/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
