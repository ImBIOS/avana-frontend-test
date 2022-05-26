import { createSlice } from "@reduxjs/toolkit";
import initialSidebarState from "../../data/sidebar";
import accessNestedChild from "../../helper/accessNestedChild";
import searchOrder from "../../helper/searchOrder";
import searchOrderRecursively from "../../helper/searchOrderRecursively";

const initialState = initialSidebarState;
const toggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    showToggle: (state, action) => {
      const orderArray = searchOrderRecursively(action.payload, state);
      accessNestedChild(state, orderArray, action.payload).isShowed = true;
    },
    hideToggle: (state, action) => {
      const orderArray = searchOrderRecursively(action.payload, state);
      accessNestedChild(state, orderArray, action.payload).isShowed = false;
    },
    activate: (state, action) => {
      const orderArray = searchOrderRecursively(action.payload, state);
      accessNestedChild(state, orderArray, action.payload).isAllowed = true;
    },
    deactivate: (state, action) => {
      const orderArray = searchOrderRecursively(action.payload, state);
      accessNestedChild(state, orderArray, action.payload).isAllowed = false;
    },
  },
});

export const { showToggle, hideToggle, activate, deactivate } =
  toggleSlice.actions;

export const selectToggle = (state) => state.toggles;

export default toggleSlice.reducer;
