import { useContext } from "react";
import { aContext } from "./A1";

const D1 = () => {
  const aData = useContext(aContext);

  return (
    <div style={{color: aData.color}}>
      <h1>
        I am D: {aData.counter}: {aData.backgroundColor}
      </h1>
      
    </div>
  );
};

export default D1;
