import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h1>CONVERS</h1>
      <ul className="navbarBox">
        <li className="item">Home</li>
        <li className="item">About Us</li>
        <li className="item">Products</li>
        <li className="item">Contact Us</li>
      </ul>
    </nav>
  );
}
