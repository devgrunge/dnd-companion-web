import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import { Typography } from "@mui/material";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { connection } = useLogin();
  return (
    <>
      <Container className="container">
        <Typography variant="h5" sx={{ mt: 10, textAlign: "center" }}>
          {connection ? "connected" : "not connected"}
        </Typography>
        <SignIn />
      </Container>
    </>
  );
};
