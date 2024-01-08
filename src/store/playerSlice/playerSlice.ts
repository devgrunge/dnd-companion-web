import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Characters, PlayerData } from "./types/storeTypes";

const initialState: PlayerData = {
  token: "",
  id: "",
  email: "",
  password: "",
  name: "",
  characters: [] as Characters[],
  isDm: false,
  theme: "default",
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
    setPlayerData: (state, action: PayloadAction<PlayerData>) => {
      return action.payload;
    },
  },
});

export const { setLogin, setToken, setPlayerData } = playerSlice.actions;

export default playerSlice.reducer;
