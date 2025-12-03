describe("localStorage basic tests", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("writes data to localStorage", () => {
    const booking = {
      date: "2025-01-10",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };

    window.localStorage.setItem("bookings", JSON.stringify([booking]));

    const stored = window.localStorage.getItem("bookings");
    expect(stored).not.toBeNull();

    const parsed = JSON.parse(stored);
    expect(parsed[0]).toEqual(booking);
  });

  test("reads data from localStorage", () => {
    const mockData = [{ date: "2025-02-20", time: "17:00", guests: 4, occasion: "Anniversary" }];
    window.localStorage.setItem("bookings", JSON.stringify(mockData));

    const stored = window.localStorage.getItem("bookings");
    const parsed = JSON.parse(stored);

    expect(parsed).toEqual(mockData);
  });
});
