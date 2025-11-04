const items = [
  { id: 1, name: "Greek Salad", price: "$12.99" },
  { id: 2, name: "Bruschetta", price: "$7.99" },
  { id: 3, name: "Lemon Dessert", price: "$6.99" },
];
export default function Specials() {
  return (
    <section>
      <h2>Specials</h2>
      <ul>
        {items.map(i => <li key={i.id}>{i.name} — {i.price}</li>)}
      </ul>
    </section>
  );
}
