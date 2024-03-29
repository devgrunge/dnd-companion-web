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
    },
    setPlayerData: (state, action: PayloadAction<PlayerData>) => {
      return { ...state, ...action.payload };
    },
    setCharacter: (state, action: PayloadAction<Characters>) => {
      state.characters.push(action.payload);
    },
  },
});

export const { setLogin, setToken, setPlayerData, setCharacter } =
  playerSlice.actions;

export default playerSlice.reducer;
