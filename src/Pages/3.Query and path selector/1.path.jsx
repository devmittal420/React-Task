import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Path = () => {
  const [searchQuery] = useSearchParams();
  const userName = searchQuery.get("user");
  console.log("userName: ", userName);

  const color = searchQuery.get("color");
  console.log("color: ", color);
  const id = searchQuery.get("id");
  console.log("id: ", id);

  return (
    <div>
      {userName || color || id ? (
        <p>
          Hello {userName}, your id is {id} and favourite color is <strong style={{color}}>{color}</strong>
        </p>
      ) : (
        <p>Hello user, what is your id and color</p>
      )}

      <Link to="/multiple">Multiple</Link>
    </div>
  );
};

export default Path;
