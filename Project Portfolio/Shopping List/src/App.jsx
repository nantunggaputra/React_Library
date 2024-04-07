/* eslint-disable react/prop-types */

import { useState } from "react";

function Header() {
  return <h1>Shopping List</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = {
      name,
      quantity,
      checked: false,
      id: (name.length + quantity) * Math.random() * Date.now() * 1000000,
    };
    console.log(newItem);
    setName("");
    setQuantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you like to buy the most today?</h3>
        <div>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <input
            type="text"
            placeholder="add item..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
}

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

function Item({ item }) {
  return (
    <>
      <li key={item.id}>
        <input type="checkbox" />
        <span
          style={item.checked ? { textDecoration: "line-through" } : {}}
        >{`${item.quantity} ${item.name}`}</span>
        <button>&times;</button>
      </li>
    </>
  );
}

function GroceryList() {
  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Sort list by input</option>
          <option value="name">Sort list by name</option>
          <option value="checked">Sort list by checked</option>
        </select>
        <button>CLEAR ALL</button>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="stats">
      There are 4 items in the shopping list, 1 item has been purchased (25%)
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList />
      <Footer />
    </div>
  );
}

export default App;
