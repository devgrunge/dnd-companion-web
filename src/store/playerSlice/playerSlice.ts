import { createSlice } from "@reduxjs/toolkit";
import { PlayerData } from "./types/storeTypes";

const initialState: PlayerData = {
  id: "",
  email: "",
  password: "",
  name: "",
  characters: [],
  isDm: false,
};

export const playerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.characters;
    },
  },
});

export const { setLogin } = playerSlice.actions;

export default playerSlice.reducer;
