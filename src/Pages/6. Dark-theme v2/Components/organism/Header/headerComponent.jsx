import { useProfile } from "../../../context/profileContext";
import { useTheme } from "../../../context/themeContext.jsx";
import { userState } from "../../../context/statecontext";

const Header = () => {
  //const { toggleTheme, theme } = useContext(themeContext);
  const { toggleTheme, theme } = useTheme();
  const { profile } = useProfile();
  const { state } = userState();

  return (
    <header
      style={{
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme === "dark" ? "#838080" : "blue",
      }}
    >
      
      <span>VSS Labs : {profile.name}</span>
      <span>State: {state}</span>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Change Light" : "Change Dark"}
      </button>
    </header>
  );
};

export default Header;
