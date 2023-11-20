import Container from "@mui/material/Container";
import SignIn from "../components/SignIn";
import "../styles/screens/index.css";
import "../styles/index.css";

export const Login = () => {
  return (
    <>
      <Container className="container">
        Welcome to dungeons and dragons battle companion
        <SignIn />
      </Container>
    </>
  );
};
