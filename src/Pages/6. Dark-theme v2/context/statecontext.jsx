import { useContext, createContext, useState } from "react";

export const stateContext = createContext(null);
export const StateProvider = stateContext.Provider;

const StateContext = ({ children }) => {
  const [state, setState] = useState("");

  const onHandleState = (e) => {
    const { value } = e.target;
    setState(value);
  };

  return (
    <StateProvider value={{ state }}>
      <div>
        <select value={state} onChange={onHandleState}>
          <option value="">Select a state</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Haryana">Haryana</option>
        </select>
      </div>
      {children}
    </StateProvider>
  );
};

export const userState = () => {
  return useContext(stateContext);
};

export default StateContext;
