import { combineReducers } from "@reduxjs/toolkit";
import playerSlice from "./playerSlice/playerSlice";

const rootReducer = combineReducers({
  player: playerSlice,
});

export const Slices = rootReducer;
