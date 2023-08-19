import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import movieSlice from "./features/movieSlice";
import movieInfoSlice from "./features/movieInfoSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  movie: movieSlice,
  movieInfo: movieInfoSlice,
});
