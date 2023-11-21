import { useState } from "react";
import { useNavigate } from "react-router";

export const useApi = () => {
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

    if (!email || !password) {
      window.alert("password and email are required");
    } else {
      navigate("/");
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    navigate,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};
