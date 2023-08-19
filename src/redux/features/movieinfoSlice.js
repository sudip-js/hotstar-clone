import { createSlice } from "@reduxjs/toolkit";

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState: {
    details: {},
  },
  reducers: {
    movieInformation: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { movieInformation } = movieInfoSlice.actions;
export default movieInfoSlice.reducer;
