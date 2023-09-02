import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    allMovies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { addMovies, setAllMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
