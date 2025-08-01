import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">GRH</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-right">
        <button className="chat-btn">Chat</button>
        <select className="lang-select">
          <option>English</option>
          <option>中文</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;