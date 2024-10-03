import D1 from "./D1";
import { useContext } from "react";
import { aContext } from "./A1";

const C1 = () => {
  const aData = useContext(aContext);

  return (
    <div style={{ color: aData.color }}>
      <h1>I am C</h1>
      <D1 />
    </div>
  );
};

export default C1;
