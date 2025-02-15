import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [value, setValue] = useState(""); //1-declare dtste variable for the value
  return (
    <nav>
      <h1>CONVERS</h1>
      <div className="search-container">
        <input
          type="search"
          placeholder="What do you want?"
          value={value} //2-link the input whith the value variable
          onChange={function (event) {
            // 3-update the value variable whith on change event
            setValue(event.target.value); //4-update the value with setValue
          }}
        ></input>
        <button
          onClick={function () {
            alert(value);
          }}
        >
          Search
        </button>
      </div>
      <ul className="navbarBox">
        <li className="item">Home</li>
        <li className="item">About Us</li>
        <li className="item">Products</li>
        <li className="item">Contact Us</li>
      </ul>
    </nav>
  );
}
