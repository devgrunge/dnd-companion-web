import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlayerData } from "./types/storeTypes";

const initialState: PlayerData = {
  token: "",
  id: "",
  email: "",
  password: "",
  name: "",
  characters: [],
  isDm: false,
  theme: "",
};

export const playerSlice = createSlice({
  name: "PlayerStatus",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<PlayerData>) => {
      return { ...state, ...action.payload };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      console.log("token ==>", state.token);
    },
  },
});

export const { setLogin, setToken } = playerSlice.actions;

export default playerSlice.reducer;
