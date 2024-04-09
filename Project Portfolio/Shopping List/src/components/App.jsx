import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: "Motherboard",
    quantity: 1,
    checked: true,
  },
  {
    id: 2,
    name: "CPU",
    quantity: 1,
    checked: false,
  },
  {
    id: 3,
    name: "RAM",
    quantity: 2,
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems);
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
