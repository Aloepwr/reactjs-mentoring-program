import sortBy from "../../src/reducers/sortBy";
import { SET_SORT_BY } from "../../src/actions/index";

describe("sortBy reducer test", () => {
  it("should return state for setting sorting type", () => {
    expect(
      sortBy([], {
        type: SET_SORT_BY,
        sortBy: "SORT_BY_SOMETHING"
      })
    ).toEqual("SORT_BY_SOMETHING")
  });

  it("should return the initial state", () => {
    expect(
      sortBy(undefined, {})).toEqual("SORT_BY_RELEASE_DATE")
  });
});