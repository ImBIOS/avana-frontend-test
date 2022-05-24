import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    showToggle: (state, action) => {
      state[action.payload] = true;
      console.log(state);
    },
    hideToggle: (state, action) => {
      state[action.payload] = false;
      console.log(state);
    },
  },
});

export const { showToggle, hideToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
