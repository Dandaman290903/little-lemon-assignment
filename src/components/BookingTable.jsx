export default function BookingTable({ bookings }) {
  if (!bookings || bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <table style={{ borderCollapse: "collapse", marginTop: "1.5rem" }}>
      <thead>
        <tr>
          <th style={th}>Date</th>
          <th style={th}>Time</th>
          <th style={th}>Guests</th>
          <th style={th}>Occasion</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((b, index) => (
          <tr key={index}>
            <td style={td}>{b.date}</td>
            <td style={td}>{b.time}</td>
            <td style={td}>{b.guests}</td>
            <td style={td}>{b.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#eee",
  fontWeight: "bold",
};

const td = {
  border: "1px solid #ccc",
  padding: "8px",
};
