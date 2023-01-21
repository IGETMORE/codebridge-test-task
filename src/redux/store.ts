import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articles/articlesSlice";

export const store = configureStore({
  reducer: {
    articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
