import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const usePlayer = () => {
  const playerData = useSelector((state: RootState) => state.player);

  const [formData, setFormData] = useState({
    name: "",
    level: 1,
    selectedClass: null,
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      car: 10,
    },
    hitpoints: 0,
    armorClass: 0,
    initiative: 0,
  });

  const handleInputChange = (field: string | number, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAttributeChange = (attribute: string, value: string) => {
    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        [attribute]: value,
      },
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return {
    handleInputChange,
    handleSubmit,
    handleAttributeChange,
    formData,
    playerData,
    setFormData,
  };
};
