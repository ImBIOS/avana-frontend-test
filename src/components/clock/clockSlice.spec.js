import clockReducer, { tick } from "./clockSlice";

describe("counter reducer", () => {
  const initialState = {
    time: "HH:MM",
  };

  it("should handle initial state", () => {
    expect(clockReducer(undefined, { type: "unknown" })).toEqual({
      time: "HH:MM",
    });
  });

  it("should handle tick", () => {
    const actual = clockReducer(initialState, tick());

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

    expect(actual.time).toEqual(`${h}:${m}`);
  });
});
