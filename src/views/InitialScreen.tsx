import { Link } from "react-router-dom";

export const InitialScreen = () => {
  return (
    <div>
      <h1>Welcome to dungeons and dragons battle companion</h1>
      <Link to="/login">Log in on App</Link>
    </div>
  );
};
