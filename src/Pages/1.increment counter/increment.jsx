import { useState } from "react";
import { Link } from "react-router-dom";

const Increment = ({ myCounter, valIncrement }) => {
  const [increment, setIncrement] = useState(0);

  const onIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Increment</h1>
      <p>Increment: {increment}</p>
      <button onClick={onIncrement}>Increment</button>
      <div>
        <Link to="/multiple">
          Multiply
        </Link>
        <Link to="/decrement" style={{ padding: 20 }}>
          Decrement
        </Link>
      </div>
    </div>
  );
};
export default Increment;
