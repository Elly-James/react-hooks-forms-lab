import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, setSearchChange]= useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearchChange(event.target.value.toLowerCase());

  }

  const itemsToDisplay = items.filter((item) => {

    const matchesCategory= 
    selectedCategory==="All" || item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(searchChange);
    return matchesSearch && matchesCategory
  });

  return (
    <div className="ShoppingList">
      
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange= {handleSearchChange}
      
      search={searchChange}
      
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
