import { useContext } from "react";
import Header from "../../Components/organism/Header/headerComponent.jsx";
import { themeContext } from "../../context/themeContext";
import { stateContext } from "../../context/statecontext"

const Homepage = () => {
  const { toggleTheme } = useContext(themeContext);
  const { state } = useContext(stateContext);

  return (
    <>
      <Header />
      <section>
        <h1>I am homepage</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <hr />
        <span>State: {state}</span>
      </section>
    </>
  );
};

export default Homepage;
