import './Header.css';

function Header() {
  return (
      <header className="header">
        <div className="logos">ttCafe</div>
        <nav className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Drink</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
