import { useState } from "react";
import Item from "./Item";

function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => {
        const regex = /^\d+\s+/;
        const nameA = a.name.replace(regex, "");
        const nameB = b.name.replace(regex, "");
        return nameA.localeCompare(nameB);
      });
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => {
        const regex = /^\d+\s+/;
        const nameA = a.name.replace(regex, "");
        const nameB = b.name.replace(regex, "");
        return nameA.localeCompare(nameB);
      });
      sortedItems = sortedItems.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort list by input</option>
          <option value="name">Sort list by name</option>
          <option value="checked">Sort list by checked</option>
        </select>
        <button onClick={onClearItems}>CLEAR ALL</button>
      </div>
    </>
  );
}

export default GroceryList;
