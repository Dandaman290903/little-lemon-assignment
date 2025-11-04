import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/"><img src="/logo.png" alt="Little Lemon logo" /></Link>
      <nav aria-label="Main navigation">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/booking">Reservations</NavLink></li>
          <li><NavLink to="/order">Order Online</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
