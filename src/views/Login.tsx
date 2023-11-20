import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import "../styles/screens/index.css";
import "../styles/index.css";
import { Typography } from "@mui/material";

export const Login = () => {
  return (
    <>
      <Container className="container">
        <Typography variant="h5" alignItems="center">
          Welcome to dungeons and dragons battle companion{" "}
        </Typography>
        <SignIn />
      </Container>
    </>
  );
};
