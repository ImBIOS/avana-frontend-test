import toggleReducer, { hideToggle, showToggle } from "./toggleSlice";

describe("toggle reducer", () => {
  const testId = "testId";
  const initialState = {};

  it("should handle initial state", () => {
    expect(toggleReducer(undefined, { type: "unknown" })).toEqual({});
  });

  it("should handle showToggle", () => {
    const actual = toggleReducer(initialState, showToggle(testId));
    expect(actual.testId).toEqual(true);
  });

  it("should handle hideToggle", () => {
    const actual = toggleReducer(initialState, hideToggle(testId));
    expect(actual.testId).toEqual(false);
  });
});
