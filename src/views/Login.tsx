import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import { Typography } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import { connection } from "../hooks/types/useLoginTypes";

export const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handleLogin,
    handlePasswordChange,
    connection,
    
  } = useLogin();

  const apiConnect: connection = connection;
  return (
    <>
      <Container className="container">
        <Typography variant="h5" sx={{ mt: 10, textAlign: "center" }}>
          {apiConnect ? "connected" : "not connected"}
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
