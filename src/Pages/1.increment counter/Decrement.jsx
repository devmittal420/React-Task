import { Link } from "react-router-dom";
import { useState } from "react";

const Decrement = ({ myCounter, valDecrement }) => {
  const [decrement, setDecrement] = useState(0);

  const onDecrement = () => {
    setDecrement((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Decrement</h1>
      <p>Decrement: {decrement}</p>
      <button onClick={onDecrement}>Decrement</button>
      <div>
        <Link to="/increment">
          Increment
        </Link>
        <Link to="/multiple" style={{ padding: 20 }}>
          Multiply
        </Link>
      </div>
    </div>
  );
};
export default Decrement;
