import React, { useState } from "react";

function Counter2() {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <>
      <button onClick={handleClick}>random Number</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value}</li>
        ))}
      </ul>
    </>
  );
}

export default Counter2;
