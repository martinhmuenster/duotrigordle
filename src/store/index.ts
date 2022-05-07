import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useSelectorOriginal,
} from "react-redux";
import { gameReducer } from "./game";
import { popupsReducer } from "./popups";
import { settingsReducer } from "./settings";
import { statsReducer } from "./stats";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    popups: popupsReducer,
    stats: statsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

// Partially monomorphise useSelector with State
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;

// Reexports
export * from "./game";
export * from "./popups";
export * from "./settings";
export * from "./stats";
