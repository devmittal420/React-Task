import { useState } from "react";
import { Link } from "react-router-dom";

const Multiply = ({ myCounter, valMultiply }) => {
  const [multiply, setMultiply] = useState(1);

  const onMultiply = () => {
    setMultiply((prev) => prev * 2);
  };

  return (
    <div>
      <h1>Multiply</h1>
      <p>Multiply: {multiply}</p>
      <button onClick={onMultiply}>Multiply</button>
      <div>
        <Link to="/increment">
          Increment
        </Link>
        <Link to="/decrement" style={{ padding: 20 }}>
          Decrement
        </Link>
      </div>
    </div>
  );
};
export default Multiply;
