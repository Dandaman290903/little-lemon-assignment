import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
        <a href='#home'>
            <img src={logo} alt="Little Lemon logo" style={{ height: '50px' }} />
        </a>
    </header>
  );
}
