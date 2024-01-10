import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { API_LOGIN_URL, API_REGISTER_URL, API_URL } from "../.env/constants";
import { useDispatch } from "react-redux";
import { setToken, setPlayerData } from "../store/playerSlice/playerSlice";
import { Notify } from "../helpers";
import { PlayerParams } from "./types/useLoginTypes";

export const useLogin = () => {
  const loginUrl: string = API_LOGIN_URL;
  const apiEndpoint: string = API_URL;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<PlayerParams["password"]>("");
  const [connection, setConnection] = useState("");
  const [name, setName] = useState<PlayerParams["name"]>("");

  const navigate = useNavigate();

  const apiConection = async (apiEndpoint: string) => {
    try {
      const apiResponse = await fetch(apiEndpoint);
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const jsonData = await apiResponse.json();
      setConnection(jsonData);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const registerPlayer = async () => {
    try {
      const userData = { email, password, name };
      const dataRequest = JSON.stringify(userData);
      const registerData = await fetch(API_REGISTER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
        method: "POST",
        body: dataRequest,
      });
      const responseData = await registerData.json();

      if (registerData.ok) {
        const playerData = {
          token: "",
          id: responseData.success.id,
          email: responseData.success.email,
          password: responseData.success.id.password,
          name: responseData.success.name,
          characters: responseData.success.characters,
          isDm: responseData.success.isDm,
          theme: responseData.success.theme,
        };
        dispatch(setPlayerData(playerData));
        Notify("success", "Player created sucessfully");
        navigate("/");
      } else {
        console.log("register data ", registerData);
        if (registerData.status === 400) {
          Notify("error", `Failed creating account`);
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
      console.warn("Error during login:", error);
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
