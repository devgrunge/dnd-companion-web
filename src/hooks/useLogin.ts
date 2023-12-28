import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { serverParams } from "./types/useLoginTypes";
import { API_REGISTER_URL, API_URL } from "../.env/constants";

export interface PlayerParams {
  id?: string;
  name: string;
  email?: string;
  password?: string;
  characters: [];
  theme: string;
}
export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<PlayerParams["password"]>("");
  const [connection, setConnection] = useState("");
  const [name, setName] = useState<PlayerParams>();
  const [player, setPlayer] = useState<PlayerParams | null>();

  const apiEndpoint: string = API_URL;

  const navigate = useNavigate();

  const apiConection = async (apiEndpoint: string) => {
    try {
      const apiResponse = await fetch(apiEndpoint);
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const jsonData = await apiResponse.json();
      console.log("json data ==>", jsonData);
      setConnection(jsonData);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleEmailChange = (event: serverParams) => {
    setEmail(event.target.value);
    console.log("email ====>", email);
  };

  const handlePasswordChange = (event: serverParams) => {
    setPassword(event.target.value);
    console.log("password ==>", password);
  };

  const handleNameChange = (event: serverParams) => {
    setName(event.target.value);
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

  const registerPlayer = async () => {
    try {
      const userData = { email, password, name };
      const dataRequest = JSON.stringify(userData);
      console.log("data request ==>", dataRequest);
      const registerData = await fetch(API_REGISTER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
        method: "POST",
        body: dataRequest,
      });
      console.log("registerData ===>", registerData);
      console.log("Request URL:", API_REGISTER_URL);
    } catch (error) {
      throw new Error(`HTTP error! Status: ${error}`);
    }
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
