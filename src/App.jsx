import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setUserInput(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, userInput];
    });
    setUserInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={userInput} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
