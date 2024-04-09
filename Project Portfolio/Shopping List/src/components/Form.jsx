import { useState } from "react";
import ReportLink from "./ReportLink";

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

export default Form;
