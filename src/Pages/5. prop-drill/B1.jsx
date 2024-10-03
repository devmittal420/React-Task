import C1 from "./C1";
import { useContext } from "react";
import { aContext } from "./A1";

const B1 = () => {
  const aData = useContext(aContext);
  // const { } = useTheme()

  return (
    <div style={{ color: aData.color }}>
      <h1>
        I am B: {aData.counter}: {aData.backgroundColor}
      </h1>
      <C1 />
    </div>
  );
};

export default B1;
