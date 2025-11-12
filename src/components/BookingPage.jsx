import BookingForm from "./BookingForm";
import BookingSlots from "./BookingSlots";

export default function BookingPage({ availableTimes, dispatch }) {
  function handleBook(time) {
    dispatch({ type: "book", time });
    alert(`Booked ${time}`);
  }

  return (
    <section>
      <h2>Reservations</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <h3 style={{ marginTop: "1.5rem" }}>Available Slots</h3>
      <BookingSlots availableTimes={availableTimes} onBook={handleBook} />
    </section>
  );
}
