import { useReducer, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../api";

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "set_date":
      const selectedDate = new Date(action.date);
      return fetchAPI(selectedDate);
    case "book":
      return state.filter((t) => t !== action.time);
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem("bookings");
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      setBookings((prev) => [...prev, formData]);
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              bookings={bookings} 
            />
          }
        />

        <Route path="/confirmed" element={<ConfirmedBooking />} />

        <Route path="/about" element={<section><h2>About</h2></section>} />
        <Route path="/menu" element={<section><h2>Menu</h2></section>} />
        <Route path="/order" element={<section><h2>Order Online</h2></section>} />
        <Route path="/login" element={<section><h2>Login</h2></section>} />
      </Routes>
    </main>
  );
}
