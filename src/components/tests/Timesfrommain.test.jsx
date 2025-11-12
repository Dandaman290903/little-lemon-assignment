import { initializeTimes, updateTimes } from "../Main";

describe("times helpers from Main", () => {
  test("initializeTimes returns the expected list", () => {
    expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  test("updateTimes returns the same state when action is unknown", () => {
    const state = ["17:00", "18:00"];
    const next = updateTimes(state, { type: "unknown" });
    expect(next).toBe(state);
  });
});
