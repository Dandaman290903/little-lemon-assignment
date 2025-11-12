import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const isValid = date && time && Number(guests) >= 1 && Number(guests) <= 10;

  function handleDateChange(value) {
    setDate(value);
    dispatch({ type: "set_date", date: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    dispatch({ type: "book", time });
    alert("Reservation submitted!");
    setTime("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, maxWidth: 360 }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        disabled={availableTimes.length === 0}
      >
        <option value="" disabled>
          {availableTimes.length ? "Select a time" : "Select a date first"}
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button className="btn" type="submit" disabled={!isValid}>
        Submit reservation
      </button>
    </form>
  );
}
