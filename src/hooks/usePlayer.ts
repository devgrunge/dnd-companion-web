import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Notify } from "../helpers";
import { API_CREATE_CHARACTER_URL } from "../.env/constants";

export const usePlayer = () => {
  const playerData = useSelector((state: RootState) => state.player);
  // console.log(playerData.token)
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

  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      console.log("Form data submitted:", formData);
      const requestData = JSON.stringify(formData);
      console.log("request data ==> ",requestData)
      const createPlayer = await fetch(API_CREATE_CHARACTER_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + playerData.token,
        },
        mode: "cors",
        method: "POST",
        body: requestData,
      });
      const responseData = await createPlayer.json();
      if (responseData.ok) {
        Notify("success", "Character created successfully");
      } else {
        Notify("error", "Error while creating character");
        throw new Error(`Error creating character`);
      }
    } catch (error) {
      Notify("error", "Error while creating character");
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
  };
};
