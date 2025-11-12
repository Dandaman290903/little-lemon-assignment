import BookingSlot from "./BookingSlot";

export default function BookingSlots({ availableTimes, onBook }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, maxWidth: "300px" }}>
      {availableTimes.length > 0 ? (
        availableTimes.map((t) => (
          <BookingSlot key={t} time={t} onBook={onBook} />
        ))
      ) : (
        <p>No slots available. Choose a date.</p>
      )}
    </ul>
  );
}
