import BookingForm from "./BookingForm";
import BookingSlots from "./BookingSlots";
import BookingTable from "./BookingTable";

export default function BookingPage({ availableTimes, dispatch, submitForm, bookings }) {
  function handleBook(time) {
    dispatch({ type: "book", time });
    alert(`Booked ${time}`);
  }

  return (
    <section>
      <h2>Reservations</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <h3 style={{ marginTop: "1.5rem" }}>Available Slots</h3>
      <BookingSlots availableTimes={availableTimes} onBook={handleBook} />

      <h3 style={{ marginTop: "2rem" }}>Existing Bookings</h3>
      <BookingTable bookings={bookings} />
    </section>
  );
}
