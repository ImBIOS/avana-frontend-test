import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: "HH:MM",
};
const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    tick: (state) => {
      const checkTime = (i) => {
        if (i < 10) {
          i = "0" + i;
        } // add zero in front of numbers < 10
        return i;
      };

      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      m = checkTime(m);

      state.time = `${h}:${m}`;
    },
  },
});

export const { tick } = clockSlice.actions;

export const selectClock = (state) => state.clock.time;

export default clockSlice.reducer;
