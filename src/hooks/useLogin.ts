import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { serverParams } from "./types/useLoginTypes";
import { API_LOGIN_URL, API_REGISTER_URL, API_URL } from "../.env/constants";
import { useDispatch } from "react-redux";
import { setToken } from "../store/playerSlice/playerSlice";
import { Notify } from "../helpers";

export interface PlayerParams {
  id?: string;
  name: string;
  email?: string;
  password?: string;
  characters: [];
  theme: string;
}
export const useLogin = () => {
  const loginUrl: string = API_LOGIN_URL;
  const apiEndpoint: string = API_URL;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<PlayerParams["password"]>("");
  const [connection, setConnection] = useState("");
  const [name, setName] = useState<PlayerParams>();

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
      if (registerData.ok) {
        Notify("success", "Playere created sucessfully");
      } else {
        console.error("Login failed. Status:", registerData.status);
        if (registerData.status === 400) {
          Notify("error", "Failed creating account");
          throw new Error(`HTTP error! Status: ${registerData.status}`);
        }
      }
    } catch (error) {
      throw new Error(`HTTP error! Status: ${error}`);
    }
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      console.log("login attempt", userData);
      const dataRequest = JSON.stringify(userData);
      const loginRequest = await fetch(loginUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: dataRequest,
      });

      if (loginRequest.ok) {
        const responseData = await loginRequest.json();
        console.log("login response", responseData);
        dispatch(setToken(responseData.message));
        Notify("success", "Login feito com sucesso");
        navigate("/dashboard");
      } else {
        console.error("Login failed. Status:", loginRequest.status);
        if (loginRequest.status === 400) {
          Notify("error", "Login failed");
          throw new Error(`HTTP error! Status: ${loginRequest.status}`);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
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
