import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    showToggle: (state, action) => {
      state[action.payload] = true;
    },
    hideToggle: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { showToggle, hideToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
