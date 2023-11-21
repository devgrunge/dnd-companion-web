import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import { Typography } from "@mui/material";
import { useLogin } from "../hooks/useApi";

export const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handleLogin,
    handlePasswordChange,
  } = useLogin();

  return (
    <>
      <Container className="container">
        <Typography variant="h5" sx={{ margin: "16px 0", textAlign: "center" }}>
          Welcome to dungeons and dragons battle companion{" "}
        </Typography>
        <SignIn
          email={email}
          password={password}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onHandleLogin={handleLogin}
        />
      </Container>
    </>
  );
};
