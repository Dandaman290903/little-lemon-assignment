import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}
function updateTimes(state, action) {
  switch (action.type) {
    case "set_date":
      return initializeTimes();
    case "book":
      return state.filter((t) => t !== action.time);
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

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
            />
          }
        />
        <Route path="/about" element={<section><h2>About</h2></section>} />
        <Route path="/menu" element={<section><h2>Menu</h2></section>} />
        <Route path="/order" element={<section><h2>Order Online</h2></section>} />
        <Route path="/login" element={<section><h2>Login</h2></section>} />
      </Routes>
    </main>
  );
}
