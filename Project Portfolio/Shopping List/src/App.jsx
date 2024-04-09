/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function Header() {
  return <h1>Shopping List</h1>;
}

function ReportLink() {
  const [clickCount, setClickCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    if (clickCount < 3) {
      setClickCount(clickCount + 1);
    }
  };
  useEffect(() => {
    const savedClickCount = parseInt(localStorage.getItem("clickCount"));
    const lastClickedTime = parseInt(localStorage.getItem("lastClickedTime"));
    if (savedClickCount && lastClickedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastClickedTime;
      if (elapsedTime < 24 * 60 * 60 * 1000) {
        setClickCount(savedClickCount);
        setDisabled(true);
      } else {
        localStorage.removeItem("clickCount");
        localStorage.removeItem("lastClickedTime");
      }
    }
  }, []);
  useEffect(() => {
    if (clickCount >= 3) {
      localStorage.setItem("clickCount", clickCount.toString());
      localStorage.setItem("lastClickedTime", new Date().getTime().toString());
      setDisabled(true);
    } else {
      localStorage.setItem("clickCount", clickCount.toString());
    }
  }, [clickCount]);
  return (
    <p className="report">
      <a
        href={
          disabled
            ? "#"
            : "mailto:anggunnantunggaputra@gmail.com?&subject=Bug%20report&body=Hi%20Nantungga%20Putra,%20I%20have%20found..."
        }
        onClick={handleClick}
        disabled={disabled}
      >
        Bug report
      </a>
    </p>
  );
}

function Form({ onAddItem }) {
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
    onAddItem(newItem);
    setName("");
    setQuantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <ReportLink />
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
            maxLength="25"
            placeholder="Add item..."
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

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={item.checked ? { textDecoration: "line-through" } : {}}
        >{`${item.quantity} ${item.name}`}</span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    </>
  );
}

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

function Footer({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p>Your shopping list is no item.</p>
      </footer>
    );
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  let percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <p>
        There are {totalItems} items in the shopping list, {checkedItems} item{" "}
        <span>({isNaN(percentage) ? 0 : percentage}%)</span> has been purchased.
      </p>
    </footer>
  );
}

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
