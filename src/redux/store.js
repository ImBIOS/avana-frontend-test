import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../components/toggle/toggleSlice";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
