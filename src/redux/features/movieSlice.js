import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      // state.movies=[...state.movies,action.payload];
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
