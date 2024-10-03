import B1 from "./B1";
import { createContext, useEffect, useState } from "react";

export const aContext = createContext(null);

const AProvider = aContext.Provider;

const A1 = () => {
  const [counter, setCounter] = useState(0);
  const [darktheme, setDarkTheme] = useState(false);

  const onToggle = () => {
    setDarkTheme((prev) => !prev);

    document.body.style.backgroundColor = darktheme ? "white" : "black";
  };
  return (
    <AProvider
      value={{
        backgroundColor: darktheme ? "black" : "white",
        color: darktheme ? "white" : "black",
        counter: counter,
        setDarkTheme,
        setCounter,
      }}
    >
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={onToggle}>Toggle Theme</button>
      <h1 style={{ color: darktheme ? "white" : "black" }}>
        I am A : {counter}
      </h1>
      <B1 />
    </AProvider>
  );

  // export const useTheme = () => {
  //   return useContext(aContext);
  // };
};

export default A1;
