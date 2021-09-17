import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import movieinfoReducer from "./features/movieinfoSlice";
import movieReducer from "./features/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movieinfo: movieinfoReducer,
    movie: movieReducer,
  },
});
