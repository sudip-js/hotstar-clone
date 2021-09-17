import { createSlice } from "@reduxjs/toolkit";

export const movieinfoSlice = createSlice({
  name: "movieinfo",
  initialState: {
    details: {},
  },
  reducers: {
    movieInformation: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { movieInformation } = movieinfoSlice.actions;

export const selectMovieinfo = (state) => state?.movieinfo?.details;

export default movieinfoSlice.reducer;
