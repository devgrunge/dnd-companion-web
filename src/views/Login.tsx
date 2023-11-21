import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import { Typography } from "@mui/material";

export const Login = () => {
  return (
    <>
      <Container className="container">
        <Typography variant="h5" sx={{ margin: "16px 0", textAlign: "center" }}>
          Welcome to dungeons and dragons battle companion{" "}
        </Typography>
        <SignIn />
      </Container>
    </>
  );
};
