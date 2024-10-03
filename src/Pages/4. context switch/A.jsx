import { createContext, useState } from "react";
import B from "./B";

// First. - Defined a context
export const aContext = createContext(null);

// Second. - Define a provider
const AProvider = aContext.Provider;

const AWithContext = () => {
  const [counter, setCounter] = useState(0);
  return (
    //  Third. - Wrap the component with the provider
    <AProvider
      value={{
        counter: counter,
        uName: "Manish",
        uCountry: "Bharat",
        setCounter,
      }}
    >
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <h1>I am A : {counter}</h1>
      <B />
    </AProvider>
  );
};

export default AWithContext;