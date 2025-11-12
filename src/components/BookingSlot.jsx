export default function BookingSlot({ time, onBook }) {
  return (
    <li style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff8e6",
      borderRadius: "8px",
      padding: "8px 12px",
      marginBottom: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <span>{time}</span>
      <button
        className="btn"
        onClick={() => onBook(time)}
        style={{ padding: "6px 10px" }}
      >
        Book
      </button>
    </li>
  );
}
