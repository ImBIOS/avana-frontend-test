import initialSidebarState from "../../data/sidebar";
import accessNestedChild from "../../helper/accessNestedChild";
import searchOrderRecursively from "../../helper/searchOrderRecursively";
import toggleReducer, {
  activate,
  deactivate,
  hideToggle,
  showToggle,
} from "./toggleSlice";

describe("toggle reducer", () => {
  const testState = { id: "test-id", isShowed: true, isAllowed: true };
  const initialState = [...initialSidebarState, testState];

  it("should handle initial state", () => {
    expect(toggleReducer(undefined, { type: "unknown" })).toEqual(
      initialSidebarState
    );
  });

  it("should handle showToggle", () => {
    const actual = toggleReducer(initialState, showToggle(testState.id));

    const testValue = searchOrderRecursively(testState.id, actual);
    const expectedValue = accessNestedChild(
      actual,
      testValue,
      testState.id
    ).isShowed;

    expect(expectedValue).toEqual(true);
  });

  it("should handle hideToggle", () => {
    const actual = toggleReducer(initialState, hideToggle(testState.id));

    const testValue = searchOrderRecursively(testState.id, actual);
    const expectedValue = accessNestedChild(
      actual,
      testValue,
      testState.id
    ).isShowed;

    expect(expectedValue).toEqual(false);
  });

  it("should handle activate", () => {
    const actual = toggleReducer(initialState, activate(testState.id));

    const testValue = searchOrderRecursively(testState.id, actual);
    const expectedValue = accessNestedChild(
      actual,
      testValue,
      testState.id
    ).isAllowed;

    expect(expectedValue).toEqual(true);
  });

  it("should handle deactivate", () => {
    const actual = toggleReducer(initialState, deactivate(testState.id));

    const testValue = searchOrderRecursively(testState.id, actual);
    const expectedValue = accessNestedChild(
      actual,
      testValue,
      testState.id
    ).isAllowed;

    expect(expectedValue).toEqual(false);
  });
});
