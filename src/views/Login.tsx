import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export const Login = () => {
  return (
    <Card>
      <Button>Welcome to dungeons and dragons battle companion</Button>
      <Link to="/register">Register your account</Link>
    </Card>
  );
};
