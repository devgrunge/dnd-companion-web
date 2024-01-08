import { useSelector } from "react-redux";

export const usePlayer = () => {
  const playerData = useSelector((state) => state.player);

  const getCharacters = () => {
    console.log("player data ==> ", playerData);
  };

  return {
    getCharacters,
  };
};
