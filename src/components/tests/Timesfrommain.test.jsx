import { initializeTimes, updateTimes } from "../Main";
import { fetchAPI } from "../../api";

jest.mock("../../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("times helpers from Main", () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test("initializeTimes calls fetchAPI and returns its result", () => {
    const mockTimes = ["17:00", "18:00", "19:30"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    expect(result).toEqual(mockTimes);
  });

  test("updateTimes with 'set_date' calls fetchAPI with the selected date and returns its result", () => {
    const mockTimes = ["18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const state = ["17:00"]; 
    const action = { type: "set_date", date: "2025-01-10" };

    const result = updateTimes(state, action);

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-01-10"));
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes removes a booked time when action type is 'book'", () => {
    const state = ["17:00", "18:00", "19:00"];
    const action = { type: "book", time: "18:00" };

    const result = updateTimes(state, action);

    expect(result).toEqual(["17:00", "19:00"]);
  });

  test("updateTimes returns the same state when action is unknown", () => {
    const state = ["17:00", "18:00"];
    const next = updateTimes(state, { type: "unknown" });

    expect(next).toBe(state);
  });
});
