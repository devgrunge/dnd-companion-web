import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Notify } from "../helpers";
import { API_CHARACTERS_URL } from "../.env/constants";
import { setCharacter } from "../store/playerSlice/playerSlice";
import io from "socket.io-client";

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
    const socket = io("http://localhost:3338/");
    socket.emit("user_email", "teste@gmail");

    socket.on("user_updated", (userObject) => {
      console.log("Received updated user:", userObject);
    
      setPlayer(userObject);
    });

    return () => {
      socket.disconnect();
    };
  }, [playerData.email, characterList]);

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
