import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "../components/clock/clockSlice";
import toggleReducer from "../components/toggle/toggleSlice";

export default configureStore({
  reducer: {
    toggles: toggleReducer,
    clock: clockReducer,
  },
});
