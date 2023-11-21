import Container from "@mui/material/Container";
import { SignIn } from "../components/SignIn";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email ====>", email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("password ==>", password);
  };

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
    
    if( !email || !password) {
      window.alert("password and email are required")
    }

    navigate("/");
  };

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
