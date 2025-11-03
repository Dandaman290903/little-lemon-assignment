export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>

      <div className="contact">
        <h3>Contact</h3>
        <address>
          123 Citrus Lane, Lemon Grove, NZ<br />
          Phone: (+64) 123-456789<br />
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
        </address>
      </div>

      <div className="social">
        <h3>Social Media</h3>
        <ul>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}
