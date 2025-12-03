import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const today = new Date().toISOString().split("T")[0];
  const isValid = date && time && Number(guests) >= 1 && Number(guests) <= 10;

  function handleDateChange(value) {
    setDate(value);
    dispatch({ type: "set_date", date: value });
    setTime("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };
    submitForm(formData);
    setTime("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, maxWidth: 360 }}>
      <h3 id="booking-form-heading">Book a Table</h3>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={today}
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={!date || availableTimes.length === 0}
        required
      >
        <option value="" disabled>
          {date ? "Select a time" : "Pick a date first"}
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
