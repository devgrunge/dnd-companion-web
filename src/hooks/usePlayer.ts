import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Notify } from "../helpers";
import { API_CHARACTERS_URL } from "../.env/constants";
import { io } from "socket.io-client";

export const usePlayer = () => {
  const [player, setPlayer] = useState({});
  const [characterList, setCharactersList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    level: 1,
    class: "",
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      car: 10,
    },
    hitpoints: 0,
    armor_class: 0,
    initiative: 0,
  });

  const playerData = useSelector((state: RootState) => state.player);

  const handleInputChange = (
    field: string | number,
    value: string | number | null
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAttributeChange = (
    attribute: string | number,
    value: string | number
  ) => {
    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        [attribute]: value,
      },
    });
  };

  const createCharacter = async () => {
    try {
      const requestData = JSON.stringify(formData);
      const createPlayer = await fetch(API_CHARACTERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + playerData.token,
          Accept: "application/json",
        },
        // mode: "cors",
        method: "POST",
        body: requestData,
      });
      const responseData = await createPlayer.json();
      if (createPlayer.status === 201) {
        Notify("success", "Character created successfully");
        console.log("response data ==> ", responseData);
        // dispatch(setCharacter(responseData.created));
      } else {
        Notify("error", "Error while creating character");
        throw new Error(`Error creating character`);
      }
    } catch (error) {
      Notify("error", "Error while creating character");
      throw new Error(`Internal server error": ${error}`);
    }
  };

  useEffect(() => {
    const socket = io("ws://localhost:3338", { transports: ["websocket"] });
  
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });
  
    socket.on("message", (data) => {
      console.log("Socket message received:", data);
    });
  
    socket.on("error", (error) => {
      console.error("Socket encountered an error:", error);
  
      switch (error.type) {
        case "error":
          console.error("General Socket error:", error.message || "No error message available.");
          break;
        default:
          console.error("Unexpected Socket error type:", error.type);
      }
    });
  
    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
  
      if (reason === "io server disconnect") {
        // Reconnect manually after 5 seconds
        console.log("Retrying in 5 seconds...");
        setTimeout(() => {
          socket.connect();
        }, 5000);
      } else {
        console.error("Socket connection abruptly closed");
      }
    });
  
    // Clean up the socket on component unmount
    return () => {
      socket.disconnect();
    };
  }, [playerData.email]);

  const classesOptions = [
    "Warrior",
    "Mage",
    "Rogue",
    "Cleric",
    "Druid",
    "Paladin",
    "Sorcerer",
    "Bard",
    "Warlock",
    "Barbarian",
  ];

  const attributes = ["Str", "Dex", "Con", "Int", "Wis", "Car"];

  return {
    handleInputChange,
    createCharacter,
    handleAttributeChange,
    formData,
    setFormData,
    attributes,
    classesOptions,
    characterList,
    setPlayer,
    player,
  };
};
