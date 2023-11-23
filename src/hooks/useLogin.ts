import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connection, setConnection] = useState();
  const [name, setName] = useState();

  const apiEndpoint: string = "http://dndapi.com:3338";

  const navigate = useNavigate();

  const apiConection = async (apiEndpoint: string) => {
    const apiResponse = await fetch(apiEndpoint);
    const jsonData = await apiResponse.json();
    setConnection(jsonData);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event?.target?.value);
    console.log("email ====>", email);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    console.log("password ==>", password);
  };

  const handleNameChange = (event: any) => {
    setName(event?.taget?.value);
    console.log("Name ===>", name);
  };
  const handleLogin = (email: string, password: string) => {
    console.log(email, password);

    if (!email || !password) {
      window.alert("password and email are required");
    } else {
      navigate("/dashboard");
    }
  };

  const userData = {
    email,
    password,
    name,
  };

  const registerPlayer = async () => {
    fetch("http://dndapi.com:3338", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  };

  useEffect(() => {
    apiConection(apiEndpoint);
  }, [apiEndpoint]);

  return {
    email,
    password,
    setEmail,
    setPassword,
    navigate,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    connection,
    handleNameChange,
    registerPlayer,
  };
};
