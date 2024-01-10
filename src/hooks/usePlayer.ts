import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Notify } from "../helpers";
import { API_CREATE_CHARACTER_URL } from "../.env/constants";
import { setCharacter } from "../store/playerSlice/playerSlice";

export const usePlayer = () => {
  const playerData = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();
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

  console.log("token ", playerData.token);
  const handleSubmit = async () => {
    try {
      const requestData = JSON.stringify(formData);
      console.log("request data ==> ", requestData);
      const createPlayer = await fetch(API_CREATE_CHARACTER_URL, {
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
      console.log("response data ==> ", createPlayer);
      if (createPlayer.status === 201) {
        Notify("success", "Character created successfully");
        dispatch(setCharacter(responseData));
      } else {
        Notify("error", "Error while creating character");
        throw new Error(`Error creating character`);
      }
    } catch (error) {
      Notify("error", "Error while creating character");
      throw new Error(`Internal server error": ${error}`);
    }
  };

  const getCharacters = async () => {
    try {
      console.log("method called");
      const caracterData = {
        name: playerData.name,
        email: playerData.email,
        password: playerData.password,
      };
      const requestData = JSON.stringify(caracterData);
      const listCharacters = await fetch("", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + playerData.token,
          Accept: "application/json",
        },
        method: "GET",
        body: requestData,
      });
      if (listCharacters.status === 200) {
        Notify("success", "Characters loaded!");
        console.log("listing characters ", listCharacters);
      } else {
        Notify("error", "Error loading characters");
        throw new Error(`Error loading characters`);
      }
    } catch (error) {
      Notify("error", "Error getting character(s) data");
      throw new Error(`Internal server error": ${error}`);
    }
  };

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
    handleSubmit,
    handleAttributeChange,
    formData,
    playerData,
    setFormData,
    attributes,
    classesOptions,
    getCharacters,
  };
};
