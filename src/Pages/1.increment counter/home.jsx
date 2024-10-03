import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/increment" style={{ padding: 20 }}>
        Increment
      </Link>
      <Link to="/decrement" style={{ padding: 20 }}>
        Decrement
      </Link>
      <Link to="/multiple" style={{ padding: 20 }}>
        Multiple
      </Link>
      <Link to="/profile" style={{ padding: 20 }}>
        Profile
      </Link>
    </div>
  );
};

export default Home;
